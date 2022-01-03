import React from 'react';
import { getCurrentUser } from '../../services/auth.service';
import { HesCreate } from '../hes.create.component';
import { HesList } from '../hes.list.component';

export const ProfilePage = () => {
  const currentUser = getCurrentUser();

  if (currentUser === null) return <a href="/login">Click here to login!</a>;

  return (
    <>
      <a href="/">Go to homepage</a>

      <HesCreate />
      <HesList />
    </>
  );
};
