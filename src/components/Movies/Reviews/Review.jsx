import { useState, useEffect } from 'react';
import { getMovieReview } from 'api/apiMovies';
import { useParams, Link } from 'react-router-dom';
import css from './Review.module.css';

const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMovieReview(movieId);
      setReview(result);
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <ul>
        {review.length > 0 ?
          review.map(({ id, author, content, url }) => (
            <li className={css.item} key={id}>
              <p className={css.author}>{author}</p>
              <p className={css.content}>{content}</p>
              <Link to={url} className={css.url}>
                {'>>>'} {url} {'<<<'}
              </Link>
            </li>
          )): 'No reviews found'}
      </ul>
    </>
  );
};

export default Review;
