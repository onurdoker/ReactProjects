import {useState} from "react";
import Text from "./Text.jsx";

const ColorRegenerator = () => {
  const [hexColor, setHexColor] = useState ("#FFFFFF");

  const handleHexColorRegeneration = () => {
    const randomHexColor = Math.floor (Math.random () * 16777215).
        toString (16).
        toUpperCase ();
    setHexColor ("#" + randomHexColor);
  };

  return (
      <>
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
          <button onClick={handleHexColorRegeneration}>Generate Color</button>
          Generated Hex Color: {hexColor}
        </div>

        <Text color={hexColor}/>
      </>
  );
};

export default ColorRegenerator;
