import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 6px;
  border-bottom: 1px solid black;
  background-color: black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
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
