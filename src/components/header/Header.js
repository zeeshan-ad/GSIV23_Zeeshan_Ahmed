import React, { useEffect } from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { AiFillHome } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import palette from '../../utils/palette.json'

const Header = ({ setSearchTerm, setPage, SearchTerm, setMoviesList, title, isSearchable }) => {

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
    setMoviesList([]);
  }

  const handleClearSearch = () => {
    setSearchTerm('');
    setPage(1);
    setMoviesList([]);
  }

  useEffect(() => {
    document.getElementById('searchField').style.display = isSearchable ? 'block' : 'none';
    document.getElementById('title').style.display = title ? 'block' : 'none';
  }, [isSearchable, title])


  return (
    <div className={styles.HeaderContainer}>
      <div id='title' className={[styles.HeaderTitle, {color: palette.Gray}]}>
        <h3>{title}</h3>
      </div>
      <div id='searchField' style={{width:'80%'}}>
        <Input
          disableUnderline
          sx={{
            height: '40px',
            width: '100%',
            padding: '0px 10px',
            borderRadius: '5px',
            background: palette.Disabled,
          }}
          value={SearchTerm}
          onChange={handleSearchInput}
          placeholder='Search'
          startAdornment={
            <InputAdornment position="start">
              <BiSearch size={20} color={palette.Gray} />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <GrFormClose size={20} color={palette.Gray}
                style={{ cursor: 'pointer', visibility: SearchTerm?.length > 0 ? 'visible' : 'hidden' }}
                onClick={handleClearSearch} />
            </InputAdornment>
          }
        />
      </div>
      <Link to='/'>
        <AiFillHome size={20} color={palette.Gray} />
      </Link>
    </div>
  )
}

export default Header