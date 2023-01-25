import api from './api';

export async function signUp(name, email) {
  const response = await api.post('/auth/sign-up', { name, email });
  return response.data;
}

export async function signIn(email) {
  return email;
}
