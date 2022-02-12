import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Navbar from '../components/navbar/Navbar';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Sidebar from '../components/sidebar/Sidebar';
import Questions from '../components/questions/Questions';
import AddNewQuestion from '../components/questions/addNewQuestion/AddNewQuestion';
import EditQuestion from '../components/questions/editQuestion/EditQuestion';
import Team from '../components/team/Team';
import EditMember from '../components/team/editMember/EditMember';
import Image from '../components/imageUpload/Image';

const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Navbar />
          <div className="app flex">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Sidebar" element={<Sidebar />} />
              <Route path="/Questions" element={<Questions />} />
              <Route path="/Questions/:id" element />
              <Route
                path="/Questions/addnewquestion"
                element={<AddNewQuestion />}
              />
              <Route
                path="/Questions/editquestion/"
                element={<EditQuestion />}
              />
              <Route path="/Team" element={<Team />} />
              <Route path="/Team/EditTeamMember/:id" element={<EditMember />} />
              <Route path="/Upload" element={<Image />} />
            </Routes>
            <ReactQueryDevtools initialIsOpen={false} />
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default AppRoutes;
