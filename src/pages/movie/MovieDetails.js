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
  const [isLoading, setisLoading] = useState(false);

  const callGetMovieDetails = async () => {
    setisLoading(true);
    const response = await getMovieDetails(id);
    if (response?.status === 200) {
      setisLoading(false);
      setMovieinfo(response?.data)
    } else {
      setisLoading(false);
      toast.error(response?.status_message);
    }
  }

  const callGetMovieCastCrew = async () => {
    setisLoading(true);
    const response = await getMovieCredits(id);
    if (response?.status === 200) {
      setisLoading(false);
      setMovieinfo((prev) => ({ ...prev, directors: response?.data?.crew?.filter((item) => item?.job === 'Director'), cast: response?.data?.cast }))
    } else {
      setisLoading(false);
      toast.error(response?.status_message);
    }
  }

  useEffect(() => {
    callGetMovieDetails();
    callGetMovieCastCrew();
  }, [])

  return (
    <div>
      <Header
        title='Movie Details'
        isSearchable={false}
      />
      <MovieDetailsComponent 
      isLoading={isLoading}
      details={MovieInfo} 
      ImageConfig={config} 
      />
    </div>
  )
}

export default MovieDetails