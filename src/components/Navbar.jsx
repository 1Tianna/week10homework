import { Link, useNavigate } from 'react-router-dom';
import { logoutUser, isAuthenticated } from '../utils/auth';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      {isAuthenticated() && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
