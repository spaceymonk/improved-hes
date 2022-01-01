import axios from 'axios';

const LOGIN_URL = 'http://localhost:3001/auth/login/';

export async function login(username: string, password: string) {
  return axios
    .post(LOGIN_URL, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
}

export function logout() {
  localStorage.removeItem('user');
}

export function getCurrentUser() {
  const user = localStorage.getItem('user');
  if (user === null) return null;
  else return JSON.parse(user);
}
