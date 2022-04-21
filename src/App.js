import Button from '@mui/material/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="../logo.png" className="App-logo" alt="logo" />
        <p>
          Estamos em processo de mudança.<br/>Não repara a bagunça!
        </p>
        <Button variant='contained' className='App-link'>
          <a
            className="App-link"
            href="https://arquivo.toliso.com.br"
          >
            Ver versão antiga
          </a>
        </Button>
      </header>
    </div>
  );
}

export default App;
