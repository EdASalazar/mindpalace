import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="/decks">Decks</Link>
      &nbsp; | &nbsp;
      <Link to="/decks/new">Add A Deck</Link>
      &nbsp; | &nbsp;
      <Link to="/cards/new">New Card</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}