import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      
      <span className='Welcome'>Elephluent</span>
      &nbsp;&nbsp;
      <Link to="/">Manage</Link>
      &nbsp; | &nbsp;
      <Link to="/board">Practice</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}