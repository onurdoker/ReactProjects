import {useState} from "react";

const Project4Button = (
    handleSlideLeft,
    handleSlideRight) => {

  const [slide, setSlide] = useState (0);

  const handleSlideLeft = () => {
    setSlide (slide - 1);
  };

  const handleSlideRight = () => {
    setSlide (slide + 1);
  };
  return (
      <div>
        <button onClick={handleSlideLeft}>Slide Left</button>
        <button onClick={handleSlideRight}>Slide Right</button>
      </div>
  );
};

export default Project4Button;