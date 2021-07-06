import PropTypes from 'prop-types';
import { PaperContainer } from './Paper.styles';

export const Paper = ({ children, gap }) => {
  return <PaperContainer gap={gap}>{children}</PaperContainer>;
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.number,
};

Paper.defaultProps = {
  gap: 16,
};
