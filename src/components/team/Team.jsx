import React from 'react';
import api from '../../utils/axios-instance';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import '../../styles/team/Team.css';

import Member from './member/Member';

const fetchTeam = async () => {
  const { data } = await api.get(
    '/profiles?filters[company][name][$eq]=Marger'
  );
  return data;
};

function Team() {
  const { status, data } = useQuery('team', fetchTeam);
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
