import axios from 'axios';

import BASE_URL from '../config';
import showNotification from './Notifications';

const axiosApi = axios.create({
  baseURL: `${BASE_URL}`,
});

axiosApi.interceptors.request.use((request) => {
  request.headers = {};

  return request;
});

axiosApi.interceptors.response.use((response) => response, (err) => {
  if (err.response && err.response.status === 401) {
    showNotification('your data can not fetched', 'error', 5000);
  }
  if (err.response && err.response.status === 403) {
    showNotification(err.response.data.msg, 'error', 5000);
  }
  if (err.response && err.response.status === 500) {
    showNotification('Unknown server error', 'error', 5000);
  }
  return Promise.reject(err);
});

export default axiosApi;
