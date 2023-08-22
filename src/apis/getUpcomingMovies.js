import api from '../utils/api';
import APIconfigs from '../utils/endpoints.json';

const getUpcomingMovies = async (Page) => {

  const { Upcoming_movies_list } = APIconfigs;

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await api(`${Upcoming_movies_list}?page=${Page}&sort_by=primary_release_date.asc`, config).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  return response;
}

export default getUpcomingMovies;