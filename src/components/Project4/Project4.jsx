import {useState} from "react";
import Project4Button from "./Project4Button.jsx";
import Project4Slider from "./Project4Slider.jsx";
import images from "./Project4images.jsx";

const Project4 = () => {

  const [slide, setSlide] = useState (0);

  const handleSlideLeft = () => {
    setSlide ((prev) => {
      return (
          (prev - 1 + images.length) % images.length);
    });

  };

  const handleSlideRight = () => {
    setSlide ((prev) => {
      return (
          (prev + 1) % images.length);

    });
  };

  return (
      <div>

        <Project4Slider
            slide={slide}
        />
        <Project4Button
            handleSlideLeft={handleSlideLeft}
            handleSlideRight={handleSlideRight}
            slide={slide}
        />
      </div>
  );
};

export default Project4;