import { Paper } from '../Paper/Paper';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import { Image, OrganizationType, Name, Actions } from './Card.styles';
import PropTypes from 'prop-types';

export const Card = ({ name }) => {
  return (
    <Paper gap={32}>
      <Image src="./images/logo.png" alt="Logo" />
      <OrganizationType>университет</OrganizationType>
      <Name>{name}</Name>
      <Actions>
        <HiPencilAlt size={16} />
        <HiTrash size={16} />
      </Actions>
    </Paper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};
