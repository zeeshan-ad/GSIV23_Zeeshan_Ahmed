import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import List from '../../components/list/List';
import { getConfigs } from '../../apis';
import { useDispatch, useSelector } from 'react-redux';
import { setConfig } from '../../store/slices/ConfigSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { config } = useSelector(state => state.config);
  const [SearchTerm, setSearchTerm] = useState(null);

  const callGetConfigs = async () => {
    const response = await getConfigs();
    if (response?.status === 200) {
      dispatch(setConfig(response?.data))
    } else {
      console.log(response?.status_message);
    }
  }


  useEffect(() => {
    if (!config) {
      callGetConfigs();
    }
  }, [])


  return (
    <div>
      <Header setSearchTerm={setSearchTerm} SearchTerm={SearchTerm}/>
      <List ImageConfig={config} />
    </div>
  )
}

export default Home