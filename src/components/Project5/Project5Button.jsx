const Project5Button = ({handleMySelection}) => {

  return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <button onClick={handleMySelection}>Rock</button>
        <button onClick={handleMySelection}>Paper</button>
        <button onClick={handleMySelection}>Scissors</button>
      </div>
  );

};

export default Project5Button;
