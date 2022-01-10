import { Link } from 'react-router-dom';

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
        <Link to={`/`}>Login</Link>
        <Link to={`/Register`}>Register</Link>
        <span>Page three</span>
      </div>
    </nav>
  );
}

export default Navbar;
