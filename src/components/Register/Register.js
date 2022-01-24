import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../../styles/Register/register.css';
import { registerStart } from '../../redux/actions/user-actions';

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  // const [files, setFiles] = useState();

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerStart(credentials));
  };

  return (
    <form className="flex flex-column" onSubmit={handleSubmit}>
      <h1>uTeam - Register</h1>
      <label>Name</label>
      <input
        placeholder="Name"
        name="name"
        type="text"
        value={credentials.name}
        onChange={handleChange}
      />
      <label>Email</label>
      <input
        placeholder="Email"
        name="email"
        type="email"
        value={credentials.email}
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        placeholder="Password"
        name="password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <label>Profile photo</label>
      {/* <input
        type="file"
        placeholder="Upload file"
        onChange={(e) => setFiles(e.target.files)}
      /> */}
      <div className="flex wrapper">
        <Link to={`/`}>Already have an account?</Link>
        <button type="submit" className="register">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
