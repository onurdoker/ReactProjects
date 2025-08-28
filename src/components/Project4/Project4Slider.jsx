import images from "./Project4images.jsx";

const Project4Slider = ({slide}) => {

  return (
      <div>
        <img src={images[slide]}
             alt=""
             width="500"
             height="400"
        />
      </div>
  );
};

export default Project4Slider;