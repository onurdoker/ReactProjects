import {useState} from "react";
import Project5Button from "./Project5Button";
import Project5Compare from "./Project5Compare";

const Project5 = () => {
  const [mySelection, setMySelection] = useState ("");

  const handleMySelection = (mySelection) => {
    setMySelection (mySelection.target.innerText);
  };

  return (
      <div>
        <h2>Project 5. Rock, Paper, Scissors</h2>
        <p>Choose Rock, Paper or Scissors and play against the computer.</p>
        <Project5Button handleMySelection={handleMySelection}/>

        <Project5Compare mySelection={mySelection}/>
      </div>
  );
};

export default Project5;
