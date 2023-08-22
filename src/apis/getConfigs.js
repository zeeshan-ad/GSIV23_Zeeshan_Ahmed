import api from '../utils/api';
import APIconfigs from '../utils/endpoints.json';

const getConfigs = async () => {

  const { configuration } = APIconfigs;

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await api(configuration, config).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  return response;
}

export default getConfigs;