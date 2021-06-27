export const Event = ({ name, location, speaker, start, end }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{speaker}</p>
      <p>{start}</p>
      <p>DURATION</p>
    </div>
  );
};
