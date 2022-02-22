import React from 'react';
import { useParams } from 'react-router-dom';

import '../../../styles/team/editMember/EditTeamMember.css';
import EditAnswers from './EditAnswers';

const Profile = () => {
  let { id } = useParams();
  return (
    <div className="holder flex">
      <div className="profile-card mr-50">
        <p className="profile-card-header">Basic info</p>
        <form className="flex flex-column">
          <label>Name</label>
          <input placeholder="Name" type="text" />
          <label>Profile Photo</label>
          <input className="file-input" type="file" />
          <div className="flex jc-end">
            <button className="btn-save">Save</button>
          </div>
        </form>
      </div>
      <EditAnswers id={id} />
    </div>
  );
};

export default Profile;
