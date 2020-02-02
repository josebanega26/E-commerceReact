import React, { useEffect } from 'react';
import './App.css';
import { HomePage, ShopPage, SignInAndUp, NotFoundPage, Checkout, Collection } from './@pages'
import { Header, Footer } from './@components'
import { Router } from "@reach/router"
import { auth, createUserProfile } from './firebase/firebase.util'
import { connect } from 'react-redux'
import { setCurrentUser } from './@redux/actions/user.actions'
function App(props) {
  const { setCurrentUser } = props

  useEffect(() => {
    const unsuscribeFromAuto = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const UserRef = await createUserProfile(userAuth)
        UserRef.onSnapshot(snapShot => {
          const { id } = snapShot
          setCurrentUser({ id, ...snapShot.data() })
        })
      }
      else {
        setCurrentUser(userAuth)
      }
    })
    // Component will Unmount in Hooks
    return () => {
      unsuscribeFromAuto()
    }
  }, [setCurrentUser])


  return (
    <div className='root-App'>
      <div className="App">
        <Header ></Header>

        <Router>
          <HomePage path='/'></HomePage>
          <ShopPage path='shop'>
            <Collection path='/:idCollection'></Collection>
          </ShopPage>
          <SignInAndUp path='signIn'></SignInAndUp>
          <Checkout path='checkout'></Checkout>
          <NotFoundPage default ></NotFoundPage>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
