import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    setResult(eval(input));
  };

  const handleClear = () => {
    setResult(0);
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="display-calculator">{result}</div>
      <input type="text" value={input} readOnly className="input-calculator" />
      <div className="button-row">
        <button onClick={() => handleInput("7")} className="button-calculator">
          7
        </button>
        <button onClick={() => handleInput("8")} className="button-calculator">
          8
        </button>
        <button onClick={() => handleInput("9")} className="button-calculator">
          9
        </button> 
        <button onClick={() => handleInput("/")} className="button-calculator orange">
          ÷
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleInput("4")} className="button-calculator">
          4
        </button>
        <button onClick={() => handleInput("5")} className="button-calculator">
          5
        </button>
        <button onClick={() => handleInput("6")} className="button-calculator">
          6
        </button>
        <button onClick={() => handleInput("*")} className="button-calculator orange">
          ×
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleInput("1")} className="button-calculator">
          1
        </button>
        <button onClick={() => handleInput("2")} className="button-calculator">
          2
        </button>
        <button onClick={() => handleInput("3")} className="button-calculator">
          3
        </button>
        <button onClick={() => handleInput("-")} className="button-calculator orange">
          −
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleInput("0")} className="button-calculator">
          0
        </button>
        <button onClick={() => handleInput(".")} className="button-calculator">
          .
        </button>
        <button onClick={() => handleCalculate()} className="button-calculator orange">
          =
        </button>
        <button onClick={() => handleInput("+")} className="button-calculator orange">
          +
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClear()} className="button-calculator clear">
          Clear
        </button>
      </div>
    </div>
  );
}

export default Calculator;
