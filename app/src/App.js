import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [ emails, setEmails ] = useState([])

  useEffect(() => {
    fetch('/api/email')
      .then(res => res.json())
      .then(setEmails)
      .catch(err => console.error("err", err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ul>
        { emails.map(email => 
          <li key={email.id}>nome: {email.nome}. email: {email.email}. fone: {email.telefone}</li>
        )}
        </ul>
      </header>
    </div>
  );
}

export default App;
