import { clearAuthenticatedUser, getAuthenticatedUser } from '../../utils/auths';
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';

const Logout = () => {
  clearAuthenticatedUser();
  console.log(getAuthenticatedUser());  
  console.log("bye");
  Navbar();
  Navigate('/login');
};

export default Logout;
