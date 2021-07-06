import data from '../../data/university.json';
import { Card } from '../Card/Card';
import { Paper } from '../Paper/Paper';
import { Container } from './Info.styles';

export const Info = () => {
  return (
    <Container>
      <Card name={data.name} />
      <Paper>{data.description}</Paper>
    </Container>
  );
};
