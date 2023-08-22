import api from '../utils/api';
import APIconfigs from '../utils/endpoints.json';

const getUpcomingMovies = async () => {

  const { Upcoming_movies_list } = APIconfigs;

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await api(Upcoming_movies_list, config).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  return response;
}

export default getUpcomingMovies;