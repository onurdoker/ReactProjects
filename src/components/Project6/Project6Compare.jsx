const Project6Compare = ({game}) => {

  return (

      <div>
        {game.result ? (
            <>
              <h3>Game Result</h3>
              <ul
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "60px",
                  }}>
                <li>
                  <p>User Dice 1 : {game.userDice1}</p>
                  <p>User Dice 2 : {game.userDice2}</p>
                  <p>User Total : {game.userTotal}</p>

                </li>
                <li>
                  <p>PC Dice 1 : {game.pcDice1}</p>
                  <p>PC Dice 2 : {game.pcDice2}</p>
                  <p>PC Total : {game.pcTotal}</p>

                </li>
              </ul>
              <p style={{
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                color: game.result === "User Wins" ? "green" : game.result === "PC Wins" ? "red" : "blue",
              }}>Result: {game.result}</p>
            </>
        ) : (
            <p>Play the game first</p>)
        }
      </div>
  );
};

export default Project6Compare;
