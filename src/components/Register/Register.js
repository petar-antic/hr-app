import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../../styles/Register/register.css';
import { registerStart } from '../../redux/actions/user-actions';

const Register = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCompanies() {
      const response = await axios.get(
        'https://internship-hr-app.herokuapp.com/api/companies'
      );
      setCompanies(response.data.data);
    }
    fetchCompanies();
  }, []);

  const [company, setCompany] = useState();
  const [companies, setCompanies] = useState([]);

  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

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
      <input type="file" placeholder="Upload file" />

      <select onChange={handleCompany}>
        {companies.map((company) => {
          return <option key={company.id}>{company.attributes.name}</option>;
        })}
      </select>

      <p>your selected company: {company}</p>

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
