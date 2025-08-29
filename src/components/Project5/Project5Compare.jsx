const Project5Compare = ({mySelection}) => {

  const PCSelection = Math.floor (Math.random () * 3);
  const PCSelectionText = PCSelection === 0 ? "Rock" : PCSelection === 1 ? "Paper" : "Scissors";
  console.log (PCSelection,
      PCSelectionText);

  // const result = () => {
  //   if (mySelection === PCSelectionText) {
  //     "Draw";
  //   } else if
  //   ((mySelection === "Rock" && PCSelectionText === "Paper") || (mySelection === "Paper" && PCSelectionText === "Scissors") || (mySelection === "Scissors" && PCSelectionText === "Rock") ){
  //       return "PC Wins";
  //     } else {
  //       return "User Wins";
  //     }
  //   }
  // };

  const result = mySelection === PCSelectionText ? "Draw" : mySelection === "Rock" && PCSelectionText === "Scissors" || mySelection === "Paper" && PCSelectionText === "Rock" || mySelection === "Scissors" && PCSelectionText === "Paper" ? "User Wins" : "PC Wins";

  console.log (result);

  return (
      <>
        <h3>Results:</h3>
        <p>
          User Selection : {mySelection}
        </p>
        <p>
          PC Selection : {PCSelectionText}
        </p>
        <p>
          Result : {result}
        </p>
      </>

  );
};

export default Project5Compare;
