import React from 'react';
import '../../styles/team/Team.css';
import { Link } from 'react-router-dom';

import profilePic from '../../assets/profilePic.png';

function Team() {
  return (
    <div className="team">
      <div className="heading">
        <span>Team</span>
        <Link to={`/team/addnewmember`}>
          <button>Add new Member</button>
        </Link>
      </div>
      <div className="teamList">
        <div className="member">
          <img src={profilePic} alt="/" className="profilePic" />
          <div className="memberInfo">
            <span className="name">Michael Jones</span>
            <span className="joinDate">Joined Jan 23rd, 2021</span>
          </div>
          <div className="memberStatus">Published</div>
          <button className="editBtn">Edit</button>
          <button className="delBtn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Team;
