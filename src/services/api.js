import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
  const { data } = await axios.get(`${baseUrl}/posts`);

  return data;
};

export const getComments = async (id) => {
  const { data } = await axios.get(`${baseUrl}/posts/${id}/comments`);

  return data;
};

export const getUsers = async () => {
  const { data } = await axios.get(`${baseUrl}/users`);

  return data;
};

export const getUserById = async (id) => {
  const { data } = await axios.get(`${baseUrl}/users/${id}`);

  return data;
};
