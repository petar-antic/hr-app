import './App.css';

import AppRoutes from './routes/routes';
import AdminAppRoutes from './routes/protected';

function App() {
  let user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  // const isLogged = useSelector((state) => state.user.isLogged);
  // const user_role = useSelector((state) => {
  //   if (isLogged) {
  //     return state.user.currentUser.profile.attributes.userRole;
  //   }
  // });
  // console.log(isLogged);
  // console.log(user_role);

  // return <>{!isLogged ? <AppRoutes /> : <AdminAppRoutes />}</>;
  return <>{user ? <AdminAppRoutes /> : <AppRoutes />}</>;
}

export default App;
