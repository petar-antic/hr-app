import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../../styles/CompanyInfo/CompanyInfo.css';

const CompanyInfo = () => {
  return (
    <form className="flex flex-column">
      <h1>Company Info</h1>
      <label>Company Name</label>
      <input placeholder="Company Name" />
      <label>Company Logo</label>
      <input className="file-input" type="file" />
      <div className="flex jc-end">
        <button className="btn-save">Save</button>
      </div>
    </form>
  );
};

export default CompanyInfo;
