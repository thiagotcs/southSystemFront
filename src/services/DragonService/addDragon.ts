import api from './apiClient';

interface Idragon {
  createdAt: string;
  type: string;
  histories: string[];
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const AddDragonData = async (data: Idragon) => {
  console.log(data);
  await api.post(`dragon`, data);
};

export default AddDragonData;
