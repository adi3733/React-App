import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className="card">
          <span className="badge">React Application</span>
          <h1 className="title">My First React Application</h1>
          
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Aditya Ravindra Ghayal</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Subject:</span>
              <span className="info-value">Cloud Computing</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Exp Aim:</span>
              <span className="info-value">Design and deploy a PaaS environment.</span>
            </div>
          </div>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
