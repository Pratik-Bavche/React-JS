import styles from "./Display.module.css";
const Display = ({ disVal }) => {
  return (
    <input type="text" className={styles.display} value={disVal} readOnly />
  );
};

export default Display;
