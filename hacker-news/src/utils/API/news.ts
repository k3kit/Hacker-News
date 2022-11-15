import axios from 'axios';
const API_URL = 'https://hacker-news.firebaseio.com/v0';
const getNewsId = async () => {
  const response = await axios.get(`${API_URL}/newstories.json`);
  return response.data;
};

const getNews = async (id: number) => {
  const response = await axios.get(`${API_URL}item/${id}.json`);
  return response.data;
};

const getComment = async (id: number) => {
  const response = await axios.get(`${API_URL}item/${id}.json`);
  return response.data;
};

export { getNewsId, getNews, getComment };
