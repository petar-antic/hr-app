import React from 'react';
import '../../styles/sidebar/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <span>Menu</span>
      <ul>
        <li>Pending for approval</li>
        <li>Team</li>
        <li>Questions</li>
        <li>Company Info</li>
        <li>My Profile</li>
      </ul>
    </div>
  );
}

export default Sidebar;
