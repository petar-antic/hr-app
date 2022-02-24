import React, { useState, useEffect } from 'react';
import '../../styles/TeamEdit/TeamEdit.css';
import { useParams } from 'react-router-dom';
import api from '../../utils/axios-instance';
import { saveProfileStart } from '../../redux/actions/user-actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TeamEdit = ({ edit }) => {
  const { profileId } = useParams();
  const dispatch = useDispatch();

  const [profileName, setProfileName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [profileStatus, setProfileStatus] = useState('');

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
      id: profileId,
    };

    dispatch(saveProfileStart(profileInfo));
  };

  const profile = useSelector((state) => state.user.profile);
  console.log(profile);

  const deleteProfile = async () => {
    const response = await api.delete(`profiles/${id}`);

    if (edit) {
      navigate('/team');
    } else {
      navigate('/pending');
    }
  };

  const approveProfile = async () => {
    const data = {
      data: {
        status: 'published',
      },
    };
    const response = await api.put(`/profiles/${profileId}`, data);

    setProfileStatus('published');
    navigate('/team');
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
              <button className="btn-delete" onClick={approveProfile}>
                Approve
              </button>
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
          <div className="profile-card">
            <p className="profile-card-header">Answers</p>
            <form className="flex flex-column">
              <div className="answers">
                <h3>Question 1 - Do you have a pet?</h3>
                <input type="text" />
              </div>
              <div className="answers">
                <h3>Question 2 - Which city do you live?</h3>
                <input type="text" />
              </div>
              <div className="answers mb-40">
                <h3>Question 3 - Take a photo of your Chistmas...</h3>
                <div className="photo"></div>
                <label>Change photo</label>
                <input className="photo-input" type="file" />
              </div>
              <div className="flex jc-end">
                <button className="btn-save">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamEdit;
