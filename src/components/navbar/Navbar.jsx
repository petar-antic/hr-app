import React from 'react';
import '../../styles/navbar/Navbar.css';
import star from '../../assets/icons/star.svg';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={star} alt="logo" type="button" />
        <span>Logo</span>
      </div>
      <div className="navLinks">
        <span>Page one</span>
        <span>Page two</span>
        <span>Page three</span>
      </div>
    </nav>
  );
}

export default Navbar;
