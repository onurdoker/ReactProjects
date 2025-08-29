import {useEffect, useState} from "react";

const Project5Compare = ({
  mySelection,
  handleGameResult,
}) => {
  const [pcSelection, setPcSelection] = useState ("");
  const [gameResult, setGameResult] = useState ("");

  useEffect (() => {
        const PCSelection = Math.floor (Math.random () * 3);
        const PCSelectionText = PCSelection === 0 ? "Rock" : PCSelection === 1 ? "Paper" : "Scissors";

        let result;

        if (mySelection === PCSelectionText) {
          result = "Draw";
        } else if (
            (mySelection === "Rock" && PCSelectionText === "Scissors") ||
            (mySelection === "Paper" && PCSelectionText === "Rock") ||
            (mySelection === "Scissors" && PCSelectionText === "Paper")
        ) {
          result = "User Wins";
        } else {
          result = "PC Wins";
        }

        console.log ("user selection 1 " + mySelection);
        console.log ("pc selection 1 " + PCSelectionText);

        setPcSelection (PCSelectionText);
        setGameResult (result);
        handleGameResult (result);

        console.log ("user selection 2 " + mySelection);
        console.log ("pc selection 2 " + PCSelectionText);
      },
      [
        mySelection,
        handleGameResult]);

  return (
      <div>
        <h3>Results:</h3>
        <p>
          User Selection : {mySelection}
        </p>
        <p>
          PC Selection : {pcSelection}
        </p>
        <p style={{color: gameResult === "User Wins" ? "green" : gameResult === "PC Wins" ? "red" : "blue"}}>
          Result : {gameResult}
        </p>

      </div>

  );
};

export default Project5Compare;
