import {useState} from "react";
import Project5Button from "./Project5Button";
import Project5Compare from "./Project5Compare";
import Project5ScoreBoard from "./Project5ScoreBoard";

const Project5 = () => {
  const [mySelection, setMySelection] = useState ("");
  const [userScore, setUserScore] = useState (0);
  const [pcScore, setPcScore] = useState (0);

  const handleMySelection = (mySelection) => {
    setMySelection (mySelection);

  };

  const handleGameResult = (result) => {
    if (result === "User Wins") {
      console.log (result);
      setUserScore (prev => prev + 1);
    } else if (result === "PC Wins") {
      setPcScore (prev => prev + 1);
    }
  };

  const resetGame = () => {
    setUserScore (0);
    setPcScore (0);
    setMySelection ("");

  };

  return (
      <div>
        <h2>Project 5. Rock, Paper, Scissors</h2>
        <p>Choose Rock, Paper or Scissors and play against the computer.</p>

        <Project5Button handleMySelection={handleMySelection}/>

        {mySelection && (
            <Project5Compare mySelection={mySelection}
                             handleGameResult={handleGameResult}
            />
        )}

        <Project5ScoreBoard userScore={userScore}
                            pcScore={pcScore}
        />

        <button onClick={resetGame}>Reset Game</button>


      </div>
  );
};

export default Project5;
