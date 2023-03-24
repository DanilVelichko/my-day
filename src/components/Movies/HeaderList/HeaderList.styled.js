import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  width: 300px;
  padding: 8px 50px;
  margin-left: 20px;
  border-radius: 4px;
  text-decoration: none;
  /* background-color: transparent; */
  font-weight: 500;
  color: white;
  font-size: 20px;

  &.active {
    /* color: orangered; */
  }
  &:hover {
    color: orangered;
  }
`;
