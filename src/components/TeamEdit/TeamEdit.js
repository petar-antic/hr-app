import React, { useState } from 'react';
import '../../styles/TeamEdit/TeamEdit.css';
import { useParams } from 'react-router-dom';
import api from '../../utils/axios-instance';

const TeamEdit = ({ edit }) => {
  const { profileId } = useParams();
  console.log(profileId);

  const [profileName, setProfileName] = useState('');

  const getProfile = async () => {
    const response = await api.get(`/profiles/${profileId}`);

    setProfileName(response.data.data.attributes.name);
    console.log(response);
  };

  getProfile();
  return (
    <>
      <div className="container">
        {edit === true && (
          <h1>
            Edit team member
            <div>
              <div className="status">
                <label>Status</label>
                <input placeholder="Published" />
              </div>
              <button className="btn-delete">Delete</button>
            </div>
          </h1>
        )}
        {edit === false && (
          <h1>
            Moderate team member entry
            <div>
              <button className="btn-delete">Approve</button>
              <button className="btn-delete">Delete</button>
            </div>
          </h1>
        )}
        <div className="container-content">
          <div className="profile-card mr-50">
            <p className="profile-card-header">Basic info</p>
            <form className="flex flex-column">
              <label>Name</label>
              <input placeholder="Name" type="text" value={profileName} />
              <label>Profile Photo</label>
              <input className="file-input" type="file" />
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
