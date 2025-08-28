import {useState} from "react";

const Project4Slider = () => {

  const Sliders = [
    "./images/image1.jpg",
  ];

  const [slide, setSlide] = useState (0);

  return (
      <>
        <img src={Sliders[0]}
             alt=""/>
      </>
  );
};

export default Project4Slider;