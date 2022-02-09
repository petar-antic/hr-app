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
        'https://strapi-internship-hr-app.onrender.com/api/companies'
      );
      setCompanies(response.data.data);
    }
    fetchCompanies();
  }, []);

  const [companies, setCompanies] = useState([]);
  const [files, setFiles] = useState();
  const [companyMenu, setCompanyMenu] = useState('');

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    role: '',
    company: '',
  });

  const handleFileChange = async (e) => {
    setFiles(e.target.files[0]);
    const formData = new FormData();
    formData.append('files', files);

    setCredentials({ ...credentials, photo: formData });
  };

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  console.log(credentials);

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
      <input
        type="file"
        placeholder="Upload file"
        onChange={(e) => handleFileChange(e)}
      />

      <select onChange={(e) => setCompanyMenu(e.target.value)}>
        <option>Join or create a Company</option>
        <option value={'join'}>Join a Company</option>
        <option value={'create'}>Create a Company</option>
      </select>

      <div
        className={`flex flex-column ${
          companyMenu === 'create' ? '' : 'invisible'
        }`}
      >
        <label>Name your Company</label>
        <input placeholder="Company name" name="name" type="text" />
      </div>

      <div className={`flex ${companyMenu === 'join' ? '' : 'invisible'}`}>
        <div className="flex">
          <label>Company User</label>
          <input
            type="radio"
            className="radioBtn"
            value="company_user"
            id="company_user"
            name="role"
            onChange={handleChange}
          />
        </div>
        <div className="flex">
          <label>Company Admin</label>
          <input
            type="radio"
            className="radioBtn"
            value="company_admin"
            id="company_admin"
            name="role"
            onChange={handleChange}
          />
        </div>
      </div>

      <select
        className={`${companyMenu === 'join' ? '' : 'invisible'}`}
        onChange={(e) => {
          setCredentials({ ...credentials, company: e.target.value });
        }}
      >
        <option>Choose a company</option>
        {companies.map((company) => {
          return (
            <option key={company.id} value={company.id}>
              {company.attributes.name}
            </option>
          );
        })}
      </select>

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
