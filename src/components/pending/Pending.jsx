import React from 'react';
import { useQuery } from 'react-query';
import api from '../../utils/axios-instance';

import '../../styles/team/Team.css';
import Member from '../team/member/Member';

const fetchTeam = async () => {
  const { data } = await api.get(
    '/profiles?filters[status][$eq]=pending&filters[company][name][$eq]=Marger'
  );
  return data;
};

const Pending = () => {
  const { status, data } = useQuery('team', fetchTeam);
  console.log(data);
  return (
    <div className="team auto">
      <div className="heading">
        <span>Pending for approval</span>
      </div>
      <div className="teamList flex">
        {status === 'success' && <Member data={data.data} />}
      </div>
    </div>
  );
};

export default Pending;
