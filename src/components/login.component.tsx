import { useNavigate } from 'react-router';
import { getCurrentUser } from '../services/auth.service';
import React from 'react';
import { login } from '../services/auth.service';

export const LoginPage = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const response = await login(username, password);
    setLoading(false);
    if (response) navigate('/');
    else setError('Login failed! Please try again...');
  };

  if (getCurrentUser() !== null)
    return (
      <div>
        <p>You have already logged in.</p>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          Click here to go home page
        </button>
      </div>
    );

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username-input-text">TCKN:</label>
      <input
        id="username-input-text"
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setUsername(event.target.value);
        }}
      />

      <label htmlFor="password-input-password">Password:</label>
      <input
        id="password-input-password"
        type="password"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
        }}
      />

      <button type="submit" disabled={loading}>
        Login
      </button>

      <p>{error}</p>
    </form>
  );
};
