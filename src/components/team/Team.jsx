import React from 'react';
import api from '../../utils/axios-instance';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import '../../styles/team/Team.css';

import Member from './member/Member';

const fetchTeam = async () => {
  const { data } = await api.get('/profiles?filters[company][id][$eq]=41');
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
      <div className="teamList">
        <Member />
        {/* <div className="member">
          <img src={profilePic} alt="/" className="profilePic" />
          <div className="memberInfo">
            <span className="name">Michael Jones</span>
            <span className="joinDate">Joined Jan 23rd, 2021</span>
          </div>
          <div className="memberStatus">Published</div>
          <button className="editBtn">Edit</button>
          <button className="delBtn">Delete</button>
        </div> */}
      </div>
    </div>
  );
}

export default Team;
