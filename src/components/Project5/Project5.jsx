import {useState} from "react";
import Project5Button from "./Project5Button";
import Project5Compare from "./Project5Compare";
import Project5ScoreBoard from "./Project5ScoreBoard";

const Project5 = () => {
  const [userScore, setUserScore] = useState (0);
  const [pcScore, setPcScore] = useState (0);
  const [gameResult, setGameResult] = useState ({
    User: "",
    PC: "",
    Result: "",
  });

  const handleMySelection = (mySelection) => {
    const PCSell = Math.floor (Math.random () * 3);
    const PcSelection = PCSell === 0 ? "Rock" : PCSell === 1 ? "Paper" : "Scissors";

    let result;

    if (mySelection === PcSelection) {
      result = "Draw";
    } else if (
        (mySelection === "Rock" && PcSelection === "Scissors") ||
        (mySelection === "Paper" && PcSelection === "Rock") ||
        (mySelection === "Scissors" && PcSelection === "Paper")
    ) {
      result = "User Wins";
      setUserScore ((prev) => prev + 1);
    } else {
      result = "PC Wins";
      setPcScore ((prev) => prev + 1);
    }

    setGameResult ({
      mySelection,
      PcSelection,
      result,
    });

  };

  const resetGame = () => {
    setUserScore (0);
    setPcScore (0);
    setGameResult ({
      User: "",
      PC: "",
      Result: "",
    });
  };

  return (
      <div>
        <h2>Project 5. Rock, Paper, Scissors</h2>
        <p>Choose Rock, Paper or Scissors and play against the computer.</p>

        <Project5Button handleMySelection={handleMySelection}/>

        {gameResult.mySelection && <Project5Compare gameResult={gameResult}/>}

        {gameResult.mySelection && <Project5ScoreBoard userScore={userScore}
                                                       pcScore={pcScore}
        />}

        <button onClick={resetGame}>Reset Game</button>

      </div>
  );
};

export default Project5;
