import axios from 'axios';
import authHeader from './auth.header';

const API_URL = 'http://localhost:3001/hes-logs/';

export function findAll(id: string, page: number, limit: number) {
  return axios.get(API_URL + id + `?page=${page}&limit=${limit}`, { headers: authHeader() });
}
