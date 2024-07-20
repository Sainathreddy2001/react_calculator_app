import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handler = e => {
    setInput(e.target.value);
  };

  return (
    <div className="calculator-container">
      <center>
        <h1>React Calculator App</h1>
        <br/>
        <input type="text" value={input} name="input" onChange={handler} className="input-display" />
        <br />
        <button onClick={() => setResult(eval(input))} className="button result-button">Result</button>
        <h4>Result is: {result}</h4>

        <div className="buttons-container">
          <button onClick={() => setInput(input + '1')} className="button">1</button>
          <button onClick={() => setInput(input + '2')} className="button">2</button>
          <button onClick={() => setInput(input + '3')} className="button">3</button>
          <button onClick={() => setInput(input + '4')} className="button">4</button>
          <button onClick={() => setInput(input + '5')} className="button">5</button>
          <br />
          <button onClick={() => setInput(input + '6')} className="button">6</button>
          <button onClick={() => setInput(input + '7')} className="button">7</button>
          <button onClick={() => setInput(input + '8')} className="button">8</button>
          <button onClick={() => setInput(input + '9')} className="button">9</button>
          <button onClick={() => setInput(input + '0')} className="button">0</button>
          <br />
          <button onClick={() => setInput(input + '+')} className="button">+</button>
          <button onClick={() => setInput(input + '-')} className="button">-</button>
          <button onClick={() => setInput(input + '*')} className="button">*</button>
          <button onClick={() => setInput(input + '/')} className="button">/</button>
          <button onClick={() => { setInput(''); setResult(0); }} className="button clear-button">CLR</button>
          <br />
        </div>
      </center>
    </div>
  );
}

export default App;
