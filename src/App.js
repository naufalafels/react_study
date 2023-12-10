import './App.css';

const Person = () => {
  return (
    // React Fragment
    <>
    <h1>Name: John</h1>
    <h2>Last Name: Doe</h2>
    <h3>Age: 31</h3>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person />
      <Person />
      <Person />
    </div>
  );
}

export default App;
