import {useState} from "react";
import Project6Button from "./Project6Button.jsx";
import Project6Compare from "./Project6Compare.jsx";

const Project6 = () => {
  const [game, setGame] = useState ("");
  
  return (
      <div>
        <h2>Project 6. Dice Game</h2>
        <p>Play against the computer with dice.</p>

        <Project6Button setGame={setGame}/>

        <Project6Compare game={game}/>

      </div>
  );
};

export default Project6;
