import React from 'react';
import './App.css';
import { HomePage, ShopPage } from './@pages'
import { Header, Footer } from './@components'
import { Router } from "@reach/router"

function App() {
  return (
    <div className='root-App'>
      <div className="App">
        <Header></Header>

        <Router>
          <HomePage path='/'></HomePage>
          <ShopPage path='/shop'></ShopPage>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
