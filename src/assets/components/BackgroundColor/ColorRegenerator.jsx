import {useState} from "react";
import Text from "./Text.jsx";

const ColorRegenerator = () => {
  const [hexColor, setHexColor] = useState ("#000000");

  const handleHexColorRegeneration = () => {
    const randomHexColor = Math.floor (Math.random () * 16777215).
        toString (16);
    setHexColor ("#" + randomHexColor);
  };

  return (
      <>
        <div>
          <button onClick={handleHexColorRegeneration}>Generate Color</button>
          Generated Hex Color: {hexColor}
        </div>

        <Text color={hexColor}/>
      </>
  );
};

export default ColorRegenerator;
