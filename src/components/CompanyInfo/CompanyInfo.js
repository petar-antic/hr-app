import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveCompanyStart } from '../../redux/actions/company-actions';
import { useCompany } from '../../queries/companyQuery';

import '../../styles/CompanyInfo/CompanyInfo.css';

const CompanyInfo = () => {
  const dispatch = useDispatch();

  const [companyInfo, setCompany] = useState({
    id: 0,
    name: '',
    image: null,
    invalid: false,
  });

  const userId = 340;
  const { data: currentCompany, isFetched } = useCompany(userId);

  console.log(currentCompany);

  const companyNameChanged = (e) =>
    setCompany({ ...companyInfo, name: e.target.value });

  const saveCompany = (e) => {
    e.preventDefault();
    if (companyInfo.name === '') {
      setCompany({ ...companyInfo, invalid: true });
      return;
    }

    // if (companyInfo.image === null || companyInfo.image === undefined) {
    //   setCompany({ ...companyInfo, invalid: true });
    //   return;
    // }

    setCompany({ ...companyInfo, invalid: false, id: currentCompany[0].id });
    console.log(companyInfo);
    dispatch(saveCompanyStart(companyInfo));
  };

  const setImage = (e) => {
    setCompany({ ...companyInfo, image: e.target.files[0] });
  };

  const company = useSelector((state) => state.companyReducer.company);
  console.log(company);

  const error = useSelector((state) => state.companyReducer.error);
  console.log(error);

  return (
    <form className="flex flex-column" onSubmit={saveCompany}>
      <h1>Company Info</h1>
      <label>Company Name</label>
      <input
        placeholder="Company Name"
        value={
          currentCompany === undefined || currentCompany.length === 0
            ? ''
            : currentCompany[0].attributes.name
        }
        onChange={companyNameChanged}
      />
      <label>Company Logo</label>
      <input className="file-input" type="file" onChange={setImage} />
      {companyInfo.invalid && (
        <p className="error-message">All values are required!</p>
      )}
      {company !== null && <p className="success-message">Success!</p>}
      {error !== null && <p className="error-message">Some error occurred!</p>}
      <div className="flex jc-end">
        <button className="btn-save">Save</button>
      </div>
    </form>
  );
};

export default CompanyInfo;
