import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { useParams } from 'react-router-dom'
import { getMovieCredits, getMovieDetails } from '../../apis';
import { toast } from 'react-toastify';
import MovieDetailsComponent from '../../components/movieDetails/MovieDetailsComponent';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
  const { id } = useParams();
  const { config } = useSelector(state => state.config);
  const [MovieInfo, setMovieinfo] = useState();

  const callGetMovieDetails = async () => {
    const response = await getMovieDetails(id);
    const response2 = await getMovieCredits(id);
    if (response?.status === 200) {
      setMovieinfo(response?.data)
    } else {
      toast.error(response?.status_message);
    }

    if (response2?.status === 200) {
      setMovieinfo((prev) => ({ ...prev, directors: response2?.data?.crew?.filter((item) => item?.job === 'Director'), cast: response2?.data?.cast }))
    } else {
      toast.error(response2?.status_message);
    }
  }

  useEffect(() => {
    callGetMovieDetails();
  }, [])

  return (
    <div>
      <Header
        title='Movie Details'
        isSearchable={false}
      />
      <MovieDetailsComponent details={MovieInfo} ImageConfig={config}/>
    </div>
  )
}

export default MovieDetails