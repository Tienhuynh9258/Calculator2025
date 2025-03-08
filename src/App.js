import React, { useState } from 'react';
import "./App.css";

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (number) => {
    setDisplay(display === '0' ? number : display + number);
  };

  const handleOperator = (operator) => {
    setEquation(display + operator);
    setDisplay('0');
  };

  const handleEquals = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>C</button>
        <button className="operator" onClick={() => handleOperator('/')}>/</button>
        <button className="operator" onClick={() => handleOperator('*')}>×</button>
        <button className="operator" onClick={() => handleOperator('-')}>-</button>
        
        <button className="number" onClick={() => handleNumber('7')}>7</button>
        <button className="number" onClick={() => handleNumber('8')}>8</button>
        <button className="number" onClick={() => handleNumber('9')}>9</button>
        <button className="operator" onClick={() => handleOperator('+')}>+</button>
        
        <button className="number" onClick={() => handleNumber('4')}>4</button>
        <button className="number" onClick={() => handleNumber('5')}>5</button>
        <button className="number" onClick={() => handleNumber('6')}>6</button>
        <button className="number" onClick={() => handleNumber('.')}>.</button>
        
        <button className="number" onClick={() => handleNumber('1')}>1</button>
        <button className="number" onClick={() => handleNumber('2')}>2</button>
        <button className="number" onClick={() => handleNumber('3')}>3</button>
        <button className="number" onClick={() => handleNumber('0')}>0</button>
        
        <button className="equals" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
}

export default App;
