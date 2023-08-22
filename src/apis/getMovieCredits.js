import api from '../utils/api';
import APIConfigs from '../utils/endpoints.json';

const getMovieCredits = async (id) => {

  const { Movie_details } = APIConfigs;

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await api(`${Movie_details}/${id}/credits`, config).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  return response;
}

export default getMovieCredits;