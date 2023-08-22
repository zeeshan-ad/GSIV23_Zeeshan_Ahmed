import api from "../utils/api";
import APIconfigs from "../utils/endpoints.json";

const search = async (Page, SearchTerm) => {

  const { Search } = APIconfigs;

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await api(`${Search}?page=${Page}&query=${SearchTerm}`, config).then((response) => {
    return response;
  }).catch((error) => {
    return error;
  });

  return response;
}

export default search;

