import api from './apiClient';

const GetDragon = async () => {
  const dragon = await api.get('dragon');

  return dragon.data;
};

export default GetDragon;
