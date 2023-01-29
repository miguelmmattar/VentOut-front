import api from './api';

export async function loadInitialData(token) {
  const response = await api.get('/initial-data', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postReport(body, token) {
  const response = await api.post('/report', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
