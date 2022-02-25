import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Profile from '../components/Profile/Profile';
import CompanyInfo from '../components/CompanyInfo/CompanyInfo';
import Team from '../components/Team/Team';
import TeamEdit from '../components/TeamEdit/TeamEdit';

function AppRoutes() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="app flex">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/company-info" element={<CompanyInfo />} />
            <Route path="/team" element={<Team status="published" />} />
            <Route path="/pending" element={<Team status="pending" />} />
            <Route
              path="/team-edit/:profileId"
              element={<TeamEdit edit={true} />}
            />
            <Route
              path="/moderate-member/:profileId"
              element={<TeamEdit edit={false} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AppRoutes;
