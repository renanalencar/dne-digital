import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.meiaentrada.org.br',
  headers: {
    codigoacesso: '4807689a',
  },
});
