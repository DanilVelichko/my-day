import React, { useState } from "react";
import Calculator from "components/Calculator/Calculator";

function CalculatorPage() {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEquals = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-page">
      <h1>Calculator</h1>
      <Calculator
        input={input}
        handleInput={handleInput}
        handleClear={handleClear}
        handleEquals={handleEquals}
      />
    </div>
  );
}

export default CalculatorPage;
