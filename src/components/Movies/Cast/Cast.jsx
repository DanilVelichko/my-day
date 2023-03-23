import { useState, useEffect } from 'react';
import { getCast } from 'api/apiMovies';
import {  useParams } from 'react-router-dom';
import css from './Cast.module.css';


const Cast = () => {
const { movieId } = useParams();
const [cast, setCast] = useState([]);

useEffect(() => {
const fetchData = async () => {
const result = await getCast(movieId);
setCast(result);
};

    fetchData();
  }, [movieId]);

return (
<>
<ul>

      {cast &&
      cast.length > 0 ?
      cast.map(({ name, photo, character }) => {
        return (
          <li className={css.item} key={name}>
            <img src={photo} alt={name} className={css.image} />
            <div>
              <p>Actor: {name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        );
      }): 'No Actors found'}
  </ul>
</>

  );
};

export default Cast;

