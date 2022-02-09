import axios from 'axios';

const getData = (endpoint) => {
  return axios.get(endpoint);
};

const saveItem = (endpoint, item = {}) => {
  return axios.post(endpoint, item);
};

const deleteItem = (endpoint, id) => axios.delete(`${endpoint}/${id}`);

export { getData, saveItem, deleteItem };