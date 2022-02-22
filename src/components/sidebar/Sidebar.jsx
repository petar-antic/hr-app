import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/sidebar/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <span>Menu</span>
      <ul>
        <Link to={`/Pending`}>
          <li>Pending for approval</li>
        </Link>
        <Link to={`/Team`}>
          <li>Team</li>
        </Link>
        <li>Questions</li>
        <li>Company Info</li>
        <li>My Profile</li>
      </ul>
    </div>
  );
}

export default Sidebar;
