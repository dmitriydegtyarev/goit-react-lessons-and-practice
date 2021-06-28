import styles from './ColorPicker.module.css';

export default function ColorPicker({ options }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ColorPicker</h2>
      <div>
        {options.map(option => (
          <span
            key={options.label}
            className={styles.option}
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
      </div>
    </div>
  );
}
