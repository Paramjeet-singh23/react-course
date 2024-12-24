import React from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = React.useState("");
  const [count, setCount] = React.useState(0);

  async function fetchAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <h2>Advice Slip: {advice}</h2>
      <button onClick={fetchAdvice}>Check me for magic</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;