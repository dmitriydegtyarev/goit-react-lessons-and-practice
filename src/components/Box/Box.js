import './Box.css';

export default function Box({ type = 'small', classNames = '' }) {
  return <div className={`box box-${type} ${classNames}`}>Box</div>;
}
