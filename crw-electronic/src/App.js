import React from 'react';
import './App.css';
import { HomePage } from './@pages'
import { Router } from "@reach/router"

const Dash = () => { return <h1>Dash</h1> }
function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path='/'></HomePage>
        <Dash path='/dashboard'></Dash>
      </Router>
    </div>
  );
}

export default App;
