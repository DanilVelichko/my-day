import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieSearchList.module.css';
import PropTypes from 'prop-types';

const MovieSearchList = ({ value, searchPath }) => {
  return (
    <div className={css.box}>
      <ul className={css.list}>
        {value.map(({ title, id }) => (
          <li className={css.item} key={id}>
            <Link className={css.link} to={`${id}`} state={{ searchPath }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieSearchList.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  searchPath: PropTypes.object.isRequired,
};

export default MovieSearchList;
