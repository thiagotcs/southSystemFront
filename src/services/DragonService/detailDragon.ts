import api from './apiClient';

const GetDragonDetail = async (id: string) => {
  const dragon = await api.get(`dragon/${id}`);

  return dragon.data;
};

export default GetDragonDetail;
