import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/users';

const getAllUsers = async () => {
  const res = await axios.get(baseURL);
  return res.data;
};

const getUserDetails = async (id) => {
  const res = await axios.get(`${baseURL}/${id}`);
  return res.data;
};

const services = {
  getAllUsers,
  getUserDetails
};

export default services;