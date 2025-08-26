const Button = (
    {
      handleFontSizeIncrement,
      handleFontSizeDecrement,
      fontSize,
    }) => {

  return (
      <>
        <button onClick={handleFontSizeDecrement}> -</button>
        Font Size: {fontSize}
        <button onClick={handleFontSizeIncrement}> +</button>
      </>

  );
};

export default Button;