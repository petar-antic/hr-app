import React, { useState } from 'react';

import DeleteModal from '../deleteModal/DeleteModal';
import '../../../styles/team/member/Member.css';

const Member = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileName, setProfileName] = useState('');

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
            <div className="memberStatus">Published</div>
            <button className="editBtn">Edit</button>
            <button
              className="delBtn"
              onClick={() => {
                setProfileName(person.attributes.name);
                setModalOpen(true);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      {modalOpen && (
        <DeleteModal name={profileName} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default Member;
