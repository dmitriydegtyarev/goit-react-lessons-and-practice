// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
import Box from './components/Box/Box';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export default function App() {
  return (
    <Container>
      <Box type="small" classNames="big red" />
      <Box type="medium" />
      <Box type="large" />
      {/* <Alert text="Все пропало" /> */}
      {/* <Alert text="Все пропало" type="success" /> */}
      {/* <Alert text="Все пропало" type="warning" /> */}
      {/* <Alert text="Все пропало" type="error" /> */}
    </Container>
  );
}
