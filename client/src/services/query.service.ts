import axios from 'axios';
import authHeader from './auth.header';

const API_URL = 'http://localhost:3001/query/';

export async function query(id: string) {
  const response = await axios.get('https://geolocation-db.com/json/');
  return axios.post(API_URL + id, response.data, { headers: authHeader() });
}
