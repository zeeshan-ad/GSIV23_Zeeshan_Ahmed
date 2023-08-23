import React, { useEffect, useMemo, useState } from 'react';
import Header from '../../components/header/Header';
import List from '../../components/list/List';
import { getConfigs, getUpcomingMovies, search } from '../../apis';
import { useDispatch, useSelector } from 'react-redux';
import { setConfig } from '../../store/slices/ConfigSlice';
import { toast } from 'react-toastify';
import debounce from 'lodash.debounce';

const Home = () => {
  const dispatch = useDispatch();
  const { config } = useSelector(state => state.config);
  const [SearchTerm, setSearchTerm] = useState('');
  const [MoviesList, setMoviesList] = useState([]);
  const [scrolledToBottom, setscrolledToBottom] = useState(false)
  const [Page, setPage] = useState(1);
  const [IsPageLoading, setIsPageLoading] = useState(false);

  const callGetConfigs = async () => {
    const response = await getConfigs();
    if (response?.status === 200) {
      dispatch(setConfig(response?.data))
    } else {
      toast.error(response?.status_message);
    }
  }

  const debouncedSearch = useMemo(() => {
    return debounce(async (term, page) => {
      const response = await search(term, page);
      if (response?.status === 200) {
        setIsPageLoading(false);
        setscrolledToBottom(false);
        setMoviesList((prev) => [...prev, ...response?.data?.results]);
        setPage((prev) => prev + 1);
      } else {
        setIsPageLoading(false);
        toast.error(response?.status_message);
      }
    }, 300);
  }, []);

  const callGetUpcomingList = async () => {
    if (Page === 1) {
      setIsPageLoading(true);
    }
    if (SearchTerm.length < 1) {
      const response = await getUpcomingMovies(Page);
      if (response?.status === 200) {
        setIsPageLoading(false);
        setscrolledToBottom(false);
        setMoviesList((prev) => [...prev, ...response?.data?.results]);
        setPage((prev) => prev + 1);
      } else {
        setIsPageLoading(false);
        toast.error(response?.status_message);
      }
    } else {
      debouncedSearch(SearchTerm, Page);
    }
  }

  const handleScroll = () => {
    setscrolledToBottom(window.innerHeight + window.scrollY >= document.body.scrollHeight - 50);
  }

  useEffect(() => {
    if (scrolledToBottom)
      callGetUpcomingList();
  }, [scrolledToBottom])


  useEffect(() => {
    if (!config) {
      callGetConfigs();
    }
    callGetUpcomingList();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [SearchTerm])

  return (
    <div>
      <Header
        setSearchTerm={setSearchTerm}
        SearchTerm={SearchTerm}
        callGetConfigs={callGetConfigs}
        setPage={setPage}
        Page={Page}
        setMoviesList={setMoviesList}
        title={null}
        isSearchable={true}
        debouncedSearch={debouncedSearch}
      />
      <List
        IsLoading={IsPageLoading}
        data={MoviesList}
        ImageConfig={config}
      />
    </div>
  )
}

export default Home