import axios from 'axios';

export const useCreatePost = async (data: { title: string; body: string }) => {
  return axios.post('https://jsonplaceholder.typicode.com/posts', data);
};