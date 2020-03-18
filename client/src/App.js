import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import { Header, Footer, Spinner } from "./@components";
import { Router } from "@reach/router";
import { auth, createUserProfile } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from "./@redux/actions/user.actions";
import { Layout } from "./styles.js";

const HomePage = lazy(() => import("./@pages/HomePage/HomePage"))
const ShopPage = lazy(() => import("./@pages/ShopPage/index"))
const SignInAndUp = lazy(() => import("./@pages/SignInAndUp/index"))
const NotFoundPage = lazy(() => import("./@pages/NotFound/index"))
const Checkout = lazy(() => import("./@pages/Checkout/index"))
const Collection = lazy(() => import("./@pages/Collection/index"))

function App(props) {
  const { setCurrentUser } = props;

  useEffect(() => {
    const unsuscribeFromAuto = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const UserRef = await createUserProfile(userAuth);
        UserRef.onSnapshot(snapShot => {
          const { id } = snapShot;
          setCurrentUser({ id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    // Component will Unmount in Hooks
    return () => {
      unsuscribeFromAuto();
    };
  }, [setCurrentUser]);

  return (
    <div className="root-App">
      <Layout>
        <Header></Header>

        <Suspense fallback={<Spinner />}>
          <Router>
            <HomePage path="/"></HomePage>
            <ShopPage path="shop">
              <Collection path="/:idCollection"></Collection>
            </ShopPage>
            <SignInAndUp path="signIn"></SignInAndUp>
            <Checkout path="checkout"></Checkout>
            <NotFoundPage default></NotFoundPage>
          </Router>
        </Suspense>
      </Layout>
      <Footer></Footer>
    </div>
  );
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
