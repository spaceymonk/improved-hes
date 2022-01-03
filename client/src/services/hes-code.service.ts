import axios from 'axios';
import authHeader from './auth.header';

const API_URL = 'http://localhost:3001/hes-codes/';

type CreateHesCodeDto = {
  expireAt: Date;
};

type UpdateHesCodeDto = CreateHesCodeDto;

export function create(options: CreateHesCodeDto) {
  return axios.post(API_URL, options, { headers: authHeader() });
}

export function update(id: string, options: UpdateHesCodeDto) {
  return axios.post(API_URL + id, options, { headers: authHeader() });
}

export function findAll(page: number, limit: number) {
  return axios.get(API_URL + `?page=${page}&limit=${limit}`, { headers: authHeader() });
}

export function query(id: string) {
  return axios.get(API_URL + id, { headers: authHeader() });
}

export function remove(id: string) {
  return axios.delete(API_URL + id, { headers: authHeader() });
}
