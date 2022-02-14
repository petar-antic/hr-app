import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DeleteModal from '../deleteModal/DeleteModal';
import '../../../styles/team/member/Member.css';

const Member = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [profileID, setProfileID] = useState('');

  return (
    <div className="flex teamList">
      {data.map((person) => {
        return (
          <div className="member" key={person.id}>
            <img alt="/" className="profilePic" />
            <div className="memberInfo">
              <span className="name">{person.attributes.name}</span>
              <span className="joinDate">Joined Jan 23rd, 2021</span>
            </div>
            <div className="memberStatus">{person.attributes.status}</div>
            <Link to={`/Team/EditTeamMember/${person.id}`}>
              <button className="editBtn">Edit</button>
            </Link>
            <button
              className="delBtn"
              onClick={() => {
                setProfileName(person.attributes.name);
                setProfileID(person.id);
                setModalOpen(true);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      {modalOpen && (
        <DeleteModal
          name={profileName}
          profileID={profileID}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
  );
};

export default Member;
