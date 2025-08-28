import images from "./Project4Images.jsx";
import css from "./Project4.module.css";

const slatNumber = images.length;
const Project4Button = (
    {
      handleSlideLeft,
      handleSlideRight,
      slide,
    },
) => {

  return (
      <div className={css.p4_button}>
        <button
            onClick={handleSlideLeft}>Slide Left
        </button>
        Slide No: {slide + 1} / {slatNumber}
        <button
            onClick={handleSlideRight}>Slide Right
        </button>
      </div>
  );
};

export default Project4Button;