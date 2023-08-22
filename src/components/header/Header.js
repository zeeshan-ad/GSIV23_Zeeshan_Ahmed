import React from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import palette from '../../utils/palette.json'

const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <Input
        disableUnderline
        sx={{
          height: '40px',
          width: '80%',
          padding: '0px 10px',
          borderRadius: '5px',
          background: palette.Disabled,
        }}
        placeholder='Search'
        startAdornment={
          <InputAdornment position="start">
            <AiOutlineSearch size={20} color={palette.Gray}/>
          </InputAdornment>
        }
      />
      <Link to='/'>
        <AiFillHome size={20} color={palette.Gray}/>
      </Link>
    </div>
  )
}

export default Header