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
      <div className="display">{result}</div>
      <input type="text" value={input} readOnly className="input" />
      <div className="button-row">
        <button onClick={() => handleInput("7")} className="button">
          7
        </button>
        <button onClick={() => handleInput("8")} className="button">
          8
        </button>
        <button onClick={() => handleInput("9")} className="button">
          9
        </button> 
        <button onClick={() => handleInput("/")} className="button orange">
          ÷
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleInput("4")} className="button">
          4
        </button>
        <button onClick={() => handleInput("5")} className="button">
          5
        </button>
        <button onClick={() => handleInput("6")} className="button">
          6
        </button>
        <button onClick={() => handleInput("*")} className="button orange">
          ×
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleInput("1")} className="button">
          1
        </button>
        <button onClick={() => handleInput("2")} className="button">
          2
        </button>
        <button onClick={() => handleInput("3")} className="button">
          3
        </button>
        <button onClick={() => handleInput("-")} className="button orange">
          −
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleInput("0")} className="button">
          0
        </button>
        <button onClick={() => handleInput(".")} className="button">
          .
        </button>
        <button onClick={() => handleCalculate()} className="button orange">
          =
        </button>
        <button onClick={() => handleInput("+")} className="button orange">
          +
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClear()} className="button clear">
          Clear
        </button>
      </div>
    </div>
  );
}

export default Calculator;
