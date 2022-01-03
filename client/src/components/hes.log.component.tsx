import React from 'react';
import { findAll as hesLogFindAll } from '../services/hes-log.service';
import moment from 'moment';
import { DATE_FORMAT } from '../common/constants';
import { HesLogListType } from '../common/types';

export const HesLog = ({ id }: { id: string }) => {
  const [heslogList, setHeslogList] = React.useState<HesLogListType>({ page_total: 0, total: 0, results: [] });

  async function fetch() {
    const result = await hesLogFindAll(id, 0, 100);
    setHeslogList(result.data);
  }

  React.useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (heslogList.total === 0) return <div>No query has been made!</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Creation Date</th>
          <th>Details</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {heslogList.results.map((heslog, index) => (
          <tr key={heslog.id}>
            <td>{index}</td>
            <td>{moment(heslog.createdAt).format(DATE_FORMAT)}</td>
            <td>{heslog.details}</td>
            <td>{heslog.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
