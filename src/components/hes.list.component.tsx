import React from 'react';
import { findAll as hesCodeFindAll, remove as hesCodeRemove } from '../services/hes-code.service';
import moment from 'moment';
import { DATE_FORMAT } from '../common/constants';
import { HesCodeListType, HesCodeType } from '../common/types';
import { HesLog } from './hes.log.component';

export const HesList = () => {
  const [hescodeList, setHescodeList] = React.useState<HesCodeListType>({ page_total: 0, total: 0, results: [] });

  async function fetch() {
    const result = await hesCodeFindAll(0, 100);
    setHescodeList(result.data);
  }

  React.useEffect(() => {
    fetch();
  }, []);

  const handleRemove = async (id: string) => {
    if (window.confirm('Are you sure?')) {
      await hesCodeRemove(id);
      await fetch();
    }
  };

  if (hescodeList.total === 0) return <p>No Hes Codes Created, yet!</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Hes Code</th>
          <th>Creation Date</th>
          <th>Expiration Date</th>
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {hescodeList.results.map((hescode: HesCodeType, index) => (
          <React.Fragment key={hescode.id}>
            <tr>
              <td>{index + 1}</td>
              <td>{hescode.id}</td>
              <td>{moment(hescode.createdAt).format(DATE_FORMAT)}</td>
              <td>{moment(hescode.expireAt).format(DATE_FORMAT)}</td>
              <td>
                <button onClick={() => handleRemove(hescode.id)}>Delete</button>
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <HesLog id={hescode.id} />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};
