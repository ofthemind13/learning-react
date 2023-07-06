import logo from './logo1.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Technician
        </p>
        <a
          className="App-link"
          href="https://incontechs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Matrix has YOU! 
        </a>
      </header>
    </div>
  );
}

export default App;
