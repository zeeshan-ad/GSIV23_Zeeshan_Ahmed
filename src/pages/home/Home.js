import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import List from '../../components/list/List';
import { getUpcomingMovies, getConfigs } from '../../apis';
import { useDispatch, useSelector } from 'react-redux';
import { setConfig } from '../../store/slices/ConfigSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { config } = useSelector(state => state.config);
  const [UpcomingMovies, setUpcomingMovies] = useState([]);

  const callGetUpcomingList = async () => {
    const response = await getUpcomingMovies();
    if (response?.status === 200) {
      setUpcomingMovies(response?.data?.results)
    } else {
      console.log(response?.status_message);
    }
  }


  const callGetConfigs = async () => {
    const response = await getConfigs();
    if (response?.status === 200) {
      dispatch(setConfig(response?.data))
    } else {
      console.log(response?.status_message);
    }
  }


  useEffect(() => {
    callGetUpcomingList();
    if (!config) {
      callGetConfigs();
    }
  }, [])


  return (
    <div>
      <Header />
      <List data={UpcomingMovies} ImageConfig={config}/>
    </div>
  )
}

export default Home