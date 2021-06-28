import PropTypes from 'prop-types';
import css from './Alert.module.css';

export default function Alert({ text, type }) {
  return (
    <p role="alert" className={css[type]}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
};
