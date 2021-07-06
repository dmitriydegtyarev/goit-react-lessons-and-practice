import { Sidebar } from '../Sidebar/Sidebar';
import { Container } from './Wrapper.styles';
import { Main } from '../Main/Main';

export const Wrapper = () => {
  return (
    <Container>
      <Sidebar></Sidebar>
      <Main />
    </Container>
  );
};
