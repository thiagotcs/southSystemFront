import api from './apiClient';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const DeleteDragon = async (id: string) => {
  const dragon = await api.delete(`dragon/${id}`);

  return dragon;
};

export default DeleteDragon;
