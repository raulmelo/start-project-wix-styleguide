import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Avatar } from 'wix-style-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar
          imgProps={{ src: 'https://randomuser.me/api/portraits/women/39.jpg' }}
        />
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
      </header>
    </div>
  );
}

export default App;
