import {useState} from "react";
import css from "../components/Project1/Project1.module.css";
import Project1Text from "../components/Project1/Project1Text.jsx";
import Project1Button from "../components/Project1/Project1Button.jsx";

function Project1() {
  const [font, setFont] = useState (12);

  const handleFontSizeIncrement = () => {
    // setFont (prevFont => prevFont +1)
    setFont ((prevFont) => {
      if (prevFont >= 20) {
        return prevFont;
      }
      return prevFont + 1;
    });
  };

  const handleFontSizeDecrement = () => {
    // setFont (prevFont => prevFont -1)
    setFont ((prevFont) => {
      if (prevFont <= 8) {
        return prevFont;
      } else {
        return prevFont - 1;
      }
    });
  };

  return (
      <div className={css.body}>
        <h2>Project 1. Changing Font Size</h2>
        <p className={css.text}>Adjusting the font size of the text from 8 to 20 using buttons.</p>

        <Project1Button
            handleFontSizeIncrement={handleFontSizeIncrement}
            handleFontSizeDecrement={handleFontSizeDecrement}
            fontSize={font}
        />

        <Project1Text fontSize={font}/>
      </div>
  );
}

export default Project1;
