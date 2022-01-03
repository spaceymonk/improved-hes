import React from 'react';
import { findAll as hesLogFindAll } from '../services/hes-log.service';
import moment from 'moment';
import { DATE_FORMAT } from '../common/constants';
import { HesLogListType, Location } from '../common/types';

const LocationTable = ({ data }: { data: string }) => {
  const location: Location = JSON.parse(data);
  return (
    <table>
      <tbody>
        <tr>
          <td>Country:</td>
          <td>
            {location.country_name} ({location.country_code})
          </td>
        </tr>
        <tr>
          <td>State/City</td>
          <td>
            {location.state} / {location.city} ({location.postal})
          </td>
        </tr>
        <tr>
          <td>IP Address</td>
          <td>{location.IPv4}</td>
        </tr>
        <tr>
          <td>Longtitude</td>
          <td>{location.longitude}</td>
        </tr>
        <tr>
          <td>Latitude</td>
          <td>{location.latitude}</td>
        </tr>
      </tbody>
    </table>
  );
};

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
            <td>{index + 1}</td>
            <td>{moment(heslog.createdAt).format(DATE_FORMAT)}</td>
            <td>{heslog.details}</td>
            <td>
              <LocationTable data={heslog.location} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
