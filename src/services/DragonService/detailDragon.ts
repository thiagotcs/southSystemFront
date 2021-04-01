import api from './apiClient';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const GetDragonDetail = async (id: string) => {
  const dragon = await api.get(`dragon/${id}`);

  return dragon.data;
};

export default GetDragonDetail;
