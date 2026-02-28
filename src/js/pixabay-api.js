import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54828616-eec4569a3e2d34c092b017f0c';

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  };

  const response = await axios.get(BASE_URL, { params });

  return response.data;
}