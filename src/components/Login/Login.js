import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../../styles/Login/Login.css';
import { logInStart } from '../../redux/actions/user-actions';

const LogIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInStart(credentials));
  };

  return (
    <form className="flex flex-column" onSubmit={handleSubmit}>
      <h1>uTeam - Login</h1>
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
      <div className="flex wrapper">
        <Link to={`/Register`}>Don't have an account?</Link>
        <button type="submit" className="login">
          Login
        </button>
      </div>
    </form>
  );
};

export default LogIn;
