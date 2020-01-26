import React from 'react';
import './App.css';
import { HomePage, ShopPage } from './@pages'
import { Router } from "@reach/router"

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path='/'></HomePage>
        <ShopPage path='/shop'></ShopPage>
      </Router>
    </div>
  );
}

export default App;
