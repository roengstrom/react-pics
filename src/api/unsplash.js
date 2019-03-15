import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 485b824d75dc3bec50b358265aa56b5a83d8560821c8829f0fc4940b7bc74f53'
  }
});
