import { useNavigate } from 'react-router';
import { getCurrentUser, logout } from '../../services/auth.service';

export const HomePage = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (currentUser === null) return <a href="/login">Click here to login!</a>;

  return (
    <>
      <h3>
        Welcome, {currentUser.firstName} {currentUser.lastName}
      </h3>
      <button onClick={handleLogout}>Logout</button>

      <a href="/query">HES Code Query</a>
      <a href="/profile">Profile</a>
    </>
  );
};
