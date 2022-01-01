import React from 'react';
import { getCurrentUser } from '../../services/auth.service';

export const QueryPage = () => {
  const currentUser = getCurrentUser();

  if (currentUser === null) return <a href="/login">Click here to login!</a>;

  return (
    <>
      <a href="/">Go to homepage</a>
      todoo
    </>
  );
};
