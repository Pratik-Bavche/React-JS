import styles from "./Buttons.module.css";
const Buttons = ({ onButtonClick }) => {
  const arr = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {arr.map((btnName) => (
        <button
          className={styles.buttons}
          onClick={() => onButtonClick(btnName)}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
