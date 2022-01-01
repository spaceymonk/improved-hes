import moment from 'moment';
import React from 'react';
import { create } from '../services/hes-code.service';

export const HesCreate = () => {
  const [expireDate, setExpireDate] = React.useState(moment().format('YYYY-MM-DD'));

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await create({ expireAt: new Date(expireDate) });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="expire-input-date">Expration Date:</label>
      <input
        value={expireDate}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setExpireDate(event.target.value);
        }}
        type="date"
        name="expire-input-date"
        id="expire-input-date"
      />
      <button type="submit">Create Hes Code</button>
    </form>
  );
};
