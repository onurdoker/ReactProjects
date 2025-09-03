import { useState } from "react";
import Project7Button from "./Project7Button";
import Project7Calculation from "./Project7Calculation";

const Project7 = () => {

  const [click, setClick] = useState ("");

  const handleClick = (click) => {
    setClick (click);
  };

  return (
      <div>
        <h2>Project 6. Calculator</h2>
        <p>Use calculator to simple math operations</p>

        <Project7Calculation click={ click }/>

        <Project7Button handleClick={ handleClick }/>

      </div>);

};

export default Project7;