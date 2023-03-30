import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      
      <span className='Welcome'>Welcome to Eliphluent, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="/trunks/new">Icebox</Link>
      &nbsp; | &nbsp;
      <Link to="/decks">Trunks</Link>
      &nbsp; | &nbsp;
      <Link to="/decks/new">Add A Trunk</Link>
      &nbsp; | &nbsp;
      <Link to="/cards/new">New Tusk</Link>
      &nbsp; | &nbsp;
      <Link to="/board">Review</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}