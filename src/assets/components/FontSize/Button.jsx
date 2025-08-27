import css from "../FontSize/Project1.module.css";

const Button = ({
  handleFontSizeIncrement,
  handleFontSizeDecrement,
  fontSize,
}) => {
  return (
      <div className={css.p1_button}>
        <button onClick={handleFontSizeDecrement}> -</button>
        Font Size: {fontSize}
        <button onClick={handleFontSizeIncrement}> +</button>
      </div>
  );
};

export default Button;
