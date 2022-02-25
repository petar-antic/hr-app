import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import '../../styles/Team/Team.css';
import { useCompany } from '../../queries/companyQuery';
import { useCompanyProfiles } from '../../queries/profileQuery';
import { ReactQueryDevtools } from 'react-query/devtools';
import api from '../../utils/axios-instance';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

const Team = ({ status }) => {
  const userId = 643;
  const queryClient = useQueryClient();
  const [companyName, setCompanyName] = useState('');

  const [email, setEmail] = useState('');

  const [showForm, setShowForm] = useState(false);

  //get users company so we can pass companyName when fetching team members (profiles)
  const { data: company, isFetched } = useCompany(userId);
  const { data: profiles, isFetching } = useCompanyProfiles(
    companyName,
    status
  );

  const navigate = useNavigate();

  useEffect(() => {
    isFetched && setCompanyName(company[0].attributes.name);
  }, [company, isFetched]);

  if (isFetching || !isFetched) {
    return <p style={{ marginTop: '150px' }}>Is Loading...</p>;
  }

  const emailChanged = (e) => {
    setEmail(e.target.value);
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const inviteMember = async () => {
    const data = {
      data: {
        email: email,
        companySlug: company[0].attributes.slug,
      },
    };
    const response = await api.post('/invite', data);
    console.log(response);
  };

  const showDetails = (id) => {
    console.log(id);
    navigate(`/moderate-member/${id}`);
  };

  const editProfile = (id) => {
    navigate(`/team-edit/${id}`);
  };

  const deleteProfile = async (id) => {
    console.log(id);

    const response = await api.delete(`profiles/${id}`);
    queryClient.invalidateQueries('profiles');
  };

  return (
    <>
      <div className="container">
        {status === 'published' && (
          <h1>
            Team{' '}
            <button className="btn-add-team" onClick={openForm}>
              + Add new team member
            </button>
          </h1>
        )}
        {status === 'pending' && <h1>Pending for approval</h1>}
        {showForm && (
          <div className="add-member-view">
            <div className="add-member-form">
              <label>Email address:</label>
              <input type="text" onChange={emailChanged} />
              <div className="float-right">
                <button className="btn-send" onClick={inviteMember}>
                  Send
                </button>
                <button className="btn-close" onClick={closeForm}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <div>
          {profiles.map((profile) => (
            <div className="card" key={profile.id}>
              <div className="photo"></div>
              <div className="personal-data">
                <p className="name">{profile.attributes.name}</p>
                <p className="date">
                  Joined{' '}
                  {Moment(profile.attributes.createdAt).format('MMMM Do, yyyy')}
                </p>
              </div>
              <div className="status">{status}</div>
              {status === 'published' && (
                <button
                  className="btn-edit"
                  onClick={() => editProfile(profile.id)}
                >
                  Edit
                </button>
              )}
              {status === 'pending' && (
                <button
                  className="btn-edit"
                  onClick={() => showDetails(profile.id)}
                >
                  Details
                </button>
              )}
              <button
                className="btn-delete"
                onClick={() => deleteProfile(profile.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <ReactQueryDevtools />
    </>
  );
};

export default Team;
