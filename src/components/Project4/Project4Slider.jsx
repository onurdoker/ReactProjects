import images from "./Project4Images.jsx";
import css from "./Project4.module.css";

const Project4Slider = ({slide}) => {

  return (
      <div>
        <img src={images[slide]}
             alt=""
        />
      </div>
  );
};

export default Project4Slider;