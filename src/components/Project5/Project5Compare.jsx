const Project5Compare = ({gameResult}) => {

  const {
    mySelection,
    PcSelection,
    result,
  } = gameResult;

  return (
      <div>
        <h3>Results:</h3>
        <p>
          User Selection : {mySelection}
        </p>
        <p>
          PC Selection : {PcSelection}
        </p>
        <p style={{color: result === "User Wins" ? "green" : result === "PC Wins" ? "red" : "blue"}}>
          Result : {result}
        </p>
      </div>
  );
};

export default Project5Compare;
