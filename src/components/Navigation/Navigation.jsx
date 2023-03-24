import { List, Item, Link, Icon, Text } from './Navigation.styled.js';
import Icons from 'images/icons.svg';
import { useMedia } from 'react-use';

export const Navigation = () => {
  const isTablet = useMedia('(min-width: 768px)');
  return (
    <List>
      <Item>
        <Link to="/">
          <Icon>
            <use href={`${Icons}#icon-home`}></use>
          </Icon>
          <Text>Finaces</Text>
        </Link>
      </Item>
      <Item>
        <Link to="diagram">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>Statistics</Text>
        </Link>
      </Item>
      <Item>
        <Link to="todo">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>Tasks</Text>
        </Link>
      </Item>
      <Item>
        <Link to="contacts">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>Contacts</Text>
        </Link>
      </Item>
      <Item>
        <Link to="movies">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>Movies</Text>
        </Link>
      </Item>
      <Item>
        <Link to="photo-search">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>Fotobank</Text>
        </Link>
      </Item>
      <Item>
        <Link to="calculator">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>Calculator</Text>
        </Link>
      </Item>
      <Item>
        <Link to="weather">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>Weather</Text>
        </Link>
      </Item>
        <Item>
        <Link to="calendar">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>Calendar</Text>
        </Link>
      </Item>
    </List>
  );
};
