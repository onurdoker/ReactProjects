import css from "../components/BackgroundColor/Project2.module.css";
import ColorRegenerator from "../components/BackgroundColor/ColorRegenerator.jsx";

const Project2 = () => {

  return (
      <div className={css.body}>
        <h2>Project 2. Random Text Color</h2>
        <p>
          Changing Text color using button
        </p>

        <ColorRegenerator/>

      </div>
  );
};

export default Project2;
