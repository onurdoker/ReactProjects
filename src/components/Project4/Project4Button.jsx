import images from "./Project4Images.jsx";

const slatNumber = images.length;
const Project4Button = (
    {
      handleSlideLeft,
      handleSlideRight,
      slide,
    },
) => {

  return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>

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