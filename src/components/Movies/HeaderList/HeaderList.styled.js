import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 8px 15px;
  margin-left: 20px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  color: white;
  font-size: 20px;

  &.active {
    color: orangered;
    
  }
  &:hover {
color: orangered;
  }
`;
