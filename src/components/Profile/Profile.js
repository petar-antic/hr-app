import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveProfileStart } from '../../redux/actions/user-actions';

import '../../styles/Profile/Profile.css';

const Profile = () => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    newpassword: '',
  });

  const [profileInfo, setProfile] = useState({
    name: '',
    companyId: 4,
    userRole: 'company_user',
    image: null,
    invalid: false,
  });

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const nameChanged = (e) =>
    setProfile({ ...profileInfo, name: e.target.value });

  const addImage = (e) => {
    setProfile({ ...profileInfo, image: e.target.files[0] });
  };

  const saveProfile = (e) => {
    e.preventDefault();
    if (profileInfo.name === '') {
      setProfile({ ...profileInfo, invalid: true });
      return;
    }

    if (profileInfo.image === null || profileInfo.image === undefined) {
      setProfile({ ...profileInfo, invalid: true });
      return;
    }

    setProfile({ ...profileInfo, invalid: false });

    dispatch(saveProfileStart(profileInfo));
  };

  const profile = useSelector((state) => state.user.profile);
  console.log(profile);

  return (
    <>
      <h1>My Profile</h1>
      <div className="profile-card mr-50">
        <p className="profile-card-header">Basic info</p>
        <form className="flex flex-column" onSubmit={saveProfile}>
          <label>Name</label>
          <input placeholder="Name" type="text" onChange={nameChanged} />
          <label>Profile Photo</label>
          <input className="file-input" type="file" onChange={addImage} />
          {profileInfo.invalid && (
            <p className="error-message">All values are required!</p>
          )}
          <div className="flex jc-end">
            <button className="btn-save">Save</button>
          </div>
        </form>
      </div>
      <div className="profile-card">
        <p className="profile-card-header">Security</p>
        <form className="flex flex-column">
          <label>Email</label>
          <h3>petar@quantox.com</h3>
          <label>Current password</label>
          <input
            placeholder="Current password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <label>New password</label>
          <input
            placeholder="New password"
            name="newpassword"
            type="password"
            value={credentials.newpassword}
            onChange={handleChange}
          />
          <div className="flex jc-end">
            <button className="btn-save">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
