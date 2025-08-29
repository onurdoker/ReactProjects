import images from "./Project4Images.jsx";

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