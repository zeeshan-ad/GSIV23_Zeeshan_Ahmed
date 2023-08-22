import axios from 'axios';
import APIconfigs from '../utils/endpoints.json';

const getUpcomingMovies = async () => {

  const { Upcoming_movies_list } = APIconfigs;

  const url = Upcoming_movies_list + `&api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`;
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await axios(url, config).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  return response;
}


export default getUpcomingMovies;