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
          <Text>my~Finaces</Text>
        </Link>
      </Item>
      <Item>
        <Link to="diagram">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>my~Statistics</Text>
        </Link>
      </Item>
      <Item>
        <Link to="todo">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>my~Tasks</Text>
        </Link>
      </Item>
      <Item>
        <Link to="contacts">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>my~Contacts</Text>
        </Link>
      </Item>
      <Item>
        <Link to="movies">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>my~Movies</Text>
        </Link>
      </Item>
      <Item>
        <Link to="photo-search">
          <Icon>
            <use href={`${Icons}#icon-statistics`}></use>
          </Icon>
          <Text>my~Fotobank</Text>
        </Link>
      </Item>
    </List>
  );
};
