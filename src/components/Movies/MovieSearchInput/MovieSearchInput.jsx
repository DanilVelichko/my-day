import React from 'react';
import Input from '@mui/material/Input';
import css from './MovieSearchInput.module.css'
import PropTypes from 'prop-types';

const MovieSearchInput = ({ setInput, setLoad }) => {

  const handleSubmit = e => {
    e.preventDefault();
    
    setInput({ search: e.target[0].value });
    setLoad(true);

    e.target[0].value = '';
    
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        
        <Input
          type="text"
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
        />

        <button type="submit" className={css.button}>
          <span>Search</span>
        </button>
      </form>

      
    </>
  );
};

MovieSearchInput.propTypes = {
  setLoad: PropTypes.func.isRequired,
  setInput: PropTypes.func.isRequired,
};

export default MovieSearchInput;
