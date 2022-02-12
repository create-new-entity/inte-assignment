import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const getAllUsers = async () => {
  const res = await axios.get(baseURL);
  return res.data;
};

const services = {
  getAllUsers
};

export default services;