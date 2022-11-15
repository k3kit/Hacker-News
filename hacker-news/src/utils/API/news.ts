import axios from 'axios';
const API_URL = 'https://hacker-news.firebaseio.com/v0/';
const getNewsId = async () => {
  const response = await axios.get(`${API_URL}/newsories.json`);
  return response.data;
};

const gesNews = async (id: string) => {
  const response = await axios.get(`${API_URL}item/${id}.json`);
  return response.data;
};

const getComment = async (id: string) => {
  const response = await axios.get(`${API_URL}item/${id}.json`);
  return response.data;
};
