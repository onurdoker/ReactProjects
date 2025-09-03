import css from "./Project7Button.module.css";

const Project7Button = ({handleClick}) => {
  return (
      <div className={ css.container }>
        <button className={ css.buttonScientific }
                onClick={ () => handleClick ("sin") }>sin()
        </button>
        <button className={ css.buttonScientific }
                onClick={ () => handleClick ("cos") }>cos()
        </button>
        <button className={ css.buttonScientific }
                onClick={ () => handleClick ("tan") }>tg()
        </button>
        <button className={ css.buttonScientific }
                onClick={ () => handleClick ("cot") }>cotg()
        </button>
        <button className={ css.buttonAC }
                onClick={ () => handleClick ("AC") }>AC
        </button>
        <button className={ css.buttonCE }
                onClick={ () => handleClick ("CE") }>CE
        </button>

        <button className={ css.buttonScientific }
                onClick={ () => handleClick ("ln") }>ln()
        </button>
        <button className={ css.buttonScientific }
                onClick={ () => handleClick ("ex") }>eˣ
        </button>

        <button className={ css.buttonNumber }
                onClick={ () => handleClick ("7") }>7
        </button>
        <button className={ css.buttonNumber }
                onClick={ () => handleClick ("8") }>8
        </button>
        <button className={ css.buttonNumber }
                onClick={ () => handleClick ("9") }>9
        </button>
        <button className={ css.buttonOperator }
                onClick={ () => handleClick ("/") }>/
        </button>
        <button className={ css.buttonNumber }
                onClick={ () => handleClick ("4") }>4
        </button>
        <button className={ css.buttonNumber }
                onClick={ () => handleClick ("5") }>5
        </button>
        <button className={ css.buttonNumber }
                onClick={ () => handleClick ("6") }>6
        </button>
        <button className={ css.buttonOperator }
                onClick={ () => handleClick ("*") }>x
        </button>
        <button className={ css.buttonNumber }
                onClick={ () => handleClick ("1") }>1
        </button>
        <button className={ css.buttonNumber }
                onClick={ () => handleClick ("2") }>2
        </button>
        <button className={ css.buttonNumber }
                onClick={ () => handleClick ("3") }>3
        </button>
        <button className={ css.buttonOperator }
                onClick={ () => handleClick ("-") }>-
        </button>
        <button className={ css.buttonOperator2 }
                onClick={ () => handleClick ("AA") }>-/+
        </button>

        <button className={ css.buttonNumber }
                onClick={ () => handleClick ("0") }>0
        </button>
        <button className={ css.buttonOperator2 }
                onClick={ () => handleClick (".") }>.
        </button>

        <button className={ css.buttonOperator }
                onClick={ () => handleClick ("+") }>+
        </button>

        <button className={ css.transparent }>
        </button>

        <button className={ css.buttonEqual }
                onClick={ () => handleClick ("=") }>=
        </button>

      </div>
  );
};

export default Project7Button;