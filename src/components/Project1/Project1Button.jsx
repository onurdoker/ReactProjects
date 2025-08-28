import css from "./Project1.module.css";

const Project1Button = ({
  handleFontSizeIncrement,
  handleFontSizeDecrement,
  fontSize,
}) => {
  return (
      <div className={css.p1_button}>
        <button onClick={handleFontSizeDecrement}>-</button>
        Font Size: {fontSize}
        <button onClick={handleFontSizeIncrement}>+</button>
      </div>
  );
};

export default Project1Button;
