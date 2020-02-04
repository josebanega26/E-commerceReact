import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDdVwayer9x2pHW45m4OofHGIDo_5bPTyk",
    authDomain: "crw-electronic.firebaseapp.com",
    databaseURL: "https://crw-electronic.firebaseio.com",
    projectId: "crw-electronic",
    storageBucket: "crw-electronic.appspot.com",
    messagingSenderId: "901011456408",
    appId: "1:901011456408:web:a072580301f04b052eebed"
};

export const createUserProfile = async (userRef, moreData) => {
    if (!userRef) return
    // Id de referencia del correo del usuario 
    const { uid } = userRef
    const User = firestore.doc(`users/${uid}`)
    // Obtengo informacion si el usuario exite
    const snapShop = await User.get()
    const { exists } = snapShop

    if (!exists) {
        const { displayName, email } = userRef;
        const date = new Date()

        try {
            User.set({
                displayName, email, date, ...moreData
            })
        }
        catch (err) {
            console.error(err)
        }

    }
    return User
}
firebase.initializeApp(config);
const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, firestore, firebase }
