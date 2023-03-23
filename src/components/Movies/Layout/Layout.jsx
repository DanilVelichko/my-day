import { Outlet } from 'react-router-dom';
import HeaderList from '../HeaderList/HeaderList';
import { Container, Header } from 'components/App.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <HeaderList />
      </Header>
      <Outlet />
    </Container>
  );
};

export default Layout;
