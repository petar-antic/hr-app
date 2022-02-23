import React, { useState, useEffect } from 'react';
import '../../styles/TeamEdit/TeamEdit.css';
import { useParams } from 'react-router-dom';
import api from '../../utils/axios-instance';
import { saveProfileStart } from '../../redux/actions/user-actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditAnswers from './EditAnswers';

const TeamEdit = ({ edit }) => {
  const { profileId } = useParams();
  const dispatch = useDispatch();

  const [profileName, setProfileName] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const navigate = useNavigate();

  const getProfile = async () => {
    const response = await api.get(`/profiles/${profileId}`);

    setProfileName(response.data.data.attributes.name);
    console.log(response);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const nameChanged = (e) => setProfileName(e.target.value);

  const addImage = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const saveProfile = (e) => {
    e.preventDefault();

    const profileInfo = {
      name: profileName,
      // companyId: 4,
      // userRole: 'company_user',
      image: profileImage,
    };

    dispatch(saveProfileStart(profileInfo));
  };

  const profile = useSelector((state) => state.user.profile);
  console.log(profile);

  const deleteProfile = async () => {
    //const response = await api.delete(`profiles/${id}`);

    if (edit) {
      navigate('/team');
    } else {
      navigate('/pending');
    }
  };

  return (
    <>
      <div className="container">
        {edit === true && (
          <h1>
            Edit team member
            <div>
              <div className="status">
                <label>Status</label>
                <select className="select-input">
                  <option>Published</option>
                  <option>Pending</option>
                </select>
              </div>
              <button className="btn-delete" onClick={deleteProfile}>
                Delete
              </button>
            </div>
          </h1>
        )}
        {edit === false && (
          <h1>
            Moderate team member entry
            <div>
              <button className="btn-delete">Approve</button>
              <button className="btn-delete" onClick={deleteProfile}>
                Delete
              </button>
            </div>
          </h1>
        )}
        <div className="container-content">
          <div className="profile-card mr-50">
            <p className="profile-card-header">Basic info</p>
            <form className="flex flex-column" onSubmit={saveProfile}>
              <label>Name</label>
              <input
                placeholder="Name"
                type="text"
                value={profileName}
                onChange={nameChanged}
              />
              <label>Profile Photo</label>
              <input className="file-input" type="file" onChange={addImage} />
              <div className="flex jc-end">
                <button className="btn-save">Save</button>
              </div>
            </form>
          </div>
          <EditAnswers id={profileId} />
        </div>
      </div>
    </>
  );
};

export default TeamEdit;
