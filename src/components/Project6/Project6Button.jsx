const Project6Button = ({setGame}) => {

  const handleGame = () => {
    const userDice1 = (Math.floor (Math.random () * 6)) + 1;

    const userDice2 = (Math.floor (Math.random () * 6)) + 1;

    const userTotal = userDice1 + userDice2;

    const pcDice1 = (Math.floor (Math.random () * 6)) + 1;

    const pcDice2 = (Math.floor (Math.random () * 6)) + 1;

    const pcTotal = pcDice1 + pcDice2;

    const result = userTotal > pcTotal ? "User Wins" : userTotal < pcTotal ? "PC Wins" : "Draw";

    setGame ({
      userDice1,
      userDice2,
      userTotal,
      pcDice1,
      pcDice2,
      pcTotal,
      result,
    });
  };

  return (
      <div>
        <button onClick={handleGame}>Roll</button>
      </div>
  );
};

export default Project6Button;
