import React from 'react';
import styles from './styles.module.css';
import palette from '../../utils/palette.json'
import { FaStar } from 'react-icons/fa';
import { convertDuration } from '../../utils/helper';
import { MoonLoader } from 'react-spinners';


const MovieDetailsComponent = ({ details, ImageConfig, isLoading }) => {

  if (isLoading)
    return <div className={styles.LoadingContainer}><MoonLoader color={palette.Blue} /></div>

  return (
    <div className={styles.MovieDetailsContainer}>
      <div className={styles.MovieDetailsImage}>
        <img
          src={ImageConfig?.images?.base_url + ImageConfig?.images?.poster_sizes[4] + details?.poster_path}
          alt={details?.title}
          height={'100%'}
        />
      </div>
      <div className={styles.MovieDetails}>
        <div className={styles.MovieDetailsTitle}>
          <h4 style={{ color: palette.Gray, margin: 0 }}>{details?.title}</h4>
          <div className={styles.Ratings}>
            <FaStar color={palette?.Amber} />
            <p style={{ margin: 0 }}>{details?.vote_average?.toFixed(1)}/10</p>
          </div>
        </div>
        <div className={styles.MovieDetailsKPIs}>
          <p style={{ marginBottom: '5px' }}>
            {details?.release_date?.split('-')?.[0]}
            &nbsp;| {convertDuration(details?.runtime)}
            &nbsp;| {details?.directors?.[0]?.name}</p>
          <p>Cast: {details?.cast?.map((item, index) => {
            return details?.cast?.length - 1 === index ? item?.name + '.' : item?.name + ', '
          })} </p>
        </div>
        <div className={styles.MovieDetailsOverview}>
          <p>Description: {details?.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsComponent