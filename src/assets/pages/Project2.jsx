import css from "../components/Project2/Project2.module.css";
import Project2ColorRegenerator from "../components/Project2/Project2ColorRegenerator.jsx";

const Project2 = () => {

  return (
      <div className={css.body}>
        <h2>Project 2. Random Text Color</h2>
        <p>
          Changing Text color using button
        </p>

        <Project2ColorRegenerator/>

      </div>
  );
};

export default Project2;
