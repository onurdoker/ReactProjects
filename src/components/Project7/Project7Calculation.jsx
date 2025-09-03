import { useState, useEffect } from "react";
import css from "./Project7Calculation.module.css";

const Project7Calculation = ({click}) => {
  const [calculation, setCalculation] = useState ("");

  useEffect (() => {
        handleCalculation ();
      },
      [click]);

  const handleCalculation = () => {
    setCalculation ((prev) => {
      if (click === "AC") {
        return "";
      } else if (click === "CE") {
        const parts = prev.trim ().
            split (/([+\-*/])/);
        parts.pop ();
        return parts.join ("");
      } else if (click === "AA") {
        return prev * -1;
      } else if (click === "ln") {
        return Math.log (Number (prev));
      } else if (click === "ex") {
        return Math.exp (Number (prev));
      } else if (click === "sin") {
        return Math.sin (Number (prev * (Math.PI / 180)));
      } else if (click === "cos") {
        return Math.cos (Number (prev * (Math.PI / 180)));
      } else if (click === "tan") {
        return Math.tan (Number (prev * (Math.PI / 180)));
      } else if (click === "cot") {
        return 1 / Math.tan (Number (prev * (Math.PI / 180)));
      } else if (click === "=") {
        return eval (calculation);
      } else {
        return prev + click;
      }
    });
  };

  return <div className={ css.display }>
    { calculation }
  </div>;
};

export default Project7Calculation;
