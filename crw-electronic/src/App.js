import React, { useState, useEffect } from 'react';
import './App.css';
import { HomePage, ShopPage, SignInAndUp, NotFoundPage } from './@pages'
import { Header, Footer } from './@components'
import { Router } from "@reach/router"
import { auth, createUserProfile } from './firebase/firebase.util'
function App() {
  const [user, setuser] = useState(null)


  useEffect(() => {
    const unsuscribeFromAuto = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const UserRef = await createUserProfile(userAuth)
        UserRef.onSnapshot(snapShot => {
          const { id } = snapShot
          setuser({
            id, ...snapShot.data()
          })
        })
      }
      else {
        setuser(userAuth)
      }
    })
    // Component will Unmount in Hooks
    return () => {
      unsuscribeFromAuto()
    }
  }, [])


  console.log('user', user)
  return (
    <div className='root-App'>
      <div className="App">
        <Header currentUser={user}></Header>

        <Router>
          <HomePage path='/'></HomePage>
          <ShopPage path='/shop'></ShopPage>
          <SignInAndUp path='signIn'></SignInAndUp>
          <NotFoundPage default ></NotFoundPage>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
