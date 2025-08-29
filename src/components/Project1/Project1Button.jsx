const Project1Button = ({
  handleFontSizeIncrement,
  handleFontSizeDecrement,
  fontSize,
}) => {
  return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <button onClick={handleFontSizeDecrement}>-</button>
        Font Size: {fontSize}
        <button onClick={handleFontSizeIncrement}>+</button>
      </div>
  );
};

export default Project1Button;
