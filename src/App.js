import logo from './logo.svg';
import './App.css';

const App = () => {
  const name = 'Naufalafels'
  const boolName = true;

  return (
    <div className="App">
      <h1>Welcome to {name}!</h1>
      <p>Hello, {boolName ? name : 'Guest'}.</p>
    </div>
  );
}

export default App;
