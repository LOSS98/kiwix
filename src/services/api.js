import { getToken, updateToken } from './keycloak';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Erreur lors de la requête API');
  }
  return response.json();
};

const createHeaders = async () => {
  await updateToken(60);
  return {
    'Authorization': `Bearer ${getToken()}`,
    'Content-Type': 'application/json'
  };
};

export const get = async (endpoint) => {
  const headers = await createHeaders();
  const response = await fetch(`${API_URL}${endpoint}`, { headers });
  return handleResponse(response);
};

export const post = async (endpoint, data) => {
  const headers = await createHeaders();
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

export const put = async (endpoint, data) => {
  const headers = await createHeaders();
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

export const del = async (endpoint) => {
  const headers = await createHeaders();
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'DELETE',
    headers
  });
  return handleResponse(response);
};

export const api = {
  get,
  post,
  put,
  delete: del
};