import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logInSuccess, logOut } from './redux/actions/user-actions';

import './App.css';
import AppRoutes from './routes/routes';
import AdminAppRoutes from './routes/protected';

function App() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const current_time = new Date().getTime() / 1000;

  useEffect(() => {
    if (user && token) {
      const decoded = jwt_decode(token);
      if (decoded.exp < current_time) {
        console.log('token has expired');
        dispatch(logOut());
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } else {
        console.log('token is valid');
        return dispatch(logInSuccess(user));
      }
    }
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
  // return <>{!isLogged ? <AppRoutes /> : <AdminAppRoutes />}</>;
}

export default App;
