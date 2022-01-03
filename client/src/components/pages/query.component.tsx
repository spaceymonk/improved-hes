import React from 'react';
import { getCurrentUser } from '../../services/auth.service';
import { query } from '../../services/query.service';

export const QueryPage = () => {
  const currentUser = getCurrentUser();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [hescodeId, setHescodeId] = React.useState('');
  const [data, setData] = React.useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setData('');
    try {
      const response = await query(hescodeId);
      if (response) setData(response.data.healthData);
    } catch (e) {
      setError('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  if (currentUser === null) return <a href="/login">Click here to login!</a>;

  return (
    <>
      <a href="/">Go to homepage</a>

      <form onSubmit={handleSubmit}>
        <label htmlFor="hescode-input-text">HES Code:</label>
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setHescodeId(event.target.value);
          }}
          type="text"
          id="hescode-input-text"
        />
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>

      <p>{error}</p>

      <p>{data}</p>
    </>
  );
};
