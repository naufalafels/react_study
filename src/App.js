import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  // React Hook
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100)
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((nextCounter) => nextCounter + 1)}>+</button>
    </div>
  );
}
export default App;
