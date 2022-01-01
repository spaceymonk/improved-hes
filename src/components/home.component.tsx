import React from 'react';
import { useNavigate } from 'react-router';
import { getCurrentUser, logout } from '../services/auth.service';

export const HomePage = () => {
  const navigate = useNavigate();
  const userRef = React.useRef<any>(getCurrentUser());

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (userRef.current === null) return <a href="/login">Click here to login!</a>;

  return (
    <>
      <h3>
        Welcome, {userRef.current?.firstName} {userRef.current?.lastName}
      </h3>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
