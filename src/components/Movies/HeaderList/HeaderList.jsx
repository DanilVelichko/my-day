import React from 'react';
import { Link } from './HeaderList.styled';

const navItems = [
  { href: '', text: 'Trending today' },
  { href: 'movies', text: 'Search movies' },
];

const HeaderList = () => {
  return (
    <nav>
      {navItems.map(({ href, text }) => (
        <Link to={href} key={href}>
          {text}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderList;
