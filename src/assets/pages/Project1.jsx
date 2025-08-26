import {useState} from "react";
import Text from "../components/FontSize/Text";
import Button from "../components/FontSize/Button";

function Project1() {
  const [font, setFont] = useState (12);

  const handleFontSizeIncrement = () => {
    // setFont (prevFont => prevFont +1)
    setFont (prevFont => {
      if (prevFont >= 20) {
        return prevFont;
      }
      return prevFont + 1;
    });
  };

  const handleFontSizeDecrement = () => {
    // setFont (prevFont => prevFont -1)
    setFont (prevFont => {
      if (prevFont <= 8) {
        return prevFont;
      } else {
        return prevFont - 1;
      }
    });
  };

  return (
      <div>
        <h2>Project 1. Changing Font Size</h2>
        <p>
          Changing font size of text using buttons
        </p>

        <Button handleFontSizeIncrement={handleFontSizeIncrement}
                handleFontSizeDecrement={handleFontSizeDecrement}
                fontSize={font}/>

        <Text fontSize={font}/>
      </div>
  );

}

export default Project1;