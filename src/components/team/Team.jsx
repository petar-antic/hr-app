import React from 'react';
import api from '../../utils/axios-instance';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../../styles/team/Team.css';
import Member from './member/Member';

const fetchTeam = async (companyName) => {
  const { data } = await api.get(
    `/profiles?filters[status][$eq]=published&filters[company][name][$eq]=${companyName}`
  );
  return data;
};

function Team() {
  const companyName = useSelector((state) => state.user.company.companyName);
  const { status, data } = useQuery(['team', companyName], () =>
    fetchTeam(companyName)
  );
  console.log(data);

  return (
    <div className="team">
      <div className="heading">
        <span>Team</span>
        <Link to={`/team/addnewmember`}>
          <button>Add new Member</button>
        </Link>
      </div>
      <div className="teamList flex">
        {status === 'success' && <Member data={data.data} />}
      </div>
    </div>
  );
}

export default Team;
