import api from './apiClient';

interface Idragon {
  name: string;
  createdAt: string;
  type: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const updateDragon = async (id: string, data: Idragon) => {
  const { name, createdAt, type } = data;
  await api.put(`dragon/${id}`, { name, createdAt, type });
};

export default updateDragon;
