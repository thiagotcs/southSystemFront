import api from './apiClient';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const GetDragon = async () => {
  const dragon = await api.get('dragon');

  return dragon.data;
};

export default GetDragon;
