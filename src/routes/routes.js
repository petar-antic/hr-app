import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Sidebar from '../components/sidebar/Sidebar';
import Questions from '../components/questions/Questions';

function AppRoutes() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="app flex">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Sidebar" element={<Sidebar />} />
            <Route path="/Questions" element={<Questions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AppRoutes;
