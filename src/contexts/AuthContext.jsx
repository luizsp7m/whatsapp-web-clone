import { createContext, useEffect, useState } from "react";

import { auth, firebase } from '../services/firebase';

import Router from "next/router";

const AuthContext = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);

  async function signInWithGoogle() {
    setLoadingUser(true);

    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid, email } = result.user;

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email: email,
      });
    }

    Router.push('/');

    setLoadingUser(false);
  }

  async function createUserWithEmailAndPassword(email, name, password, showError) {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      const user = auth.currentUser;

      user.updateProfile({
        displayName: name,
        photoURL: `https://avatars.dicebear.com/api/initials/${name}.svg`
      }).then(() => {
        const user = auth.currentUser;
        const { displayName, photoURL, uid, email } = user;

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email,
        });

        Router.push('/');
      });
    } catch (error) {
      showError(error.message);
    }
  }

  async function signInWithEmailAndPassword(email, password, showError) {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);

      if (result) {
        const { displayName, photoURL, uid, email } = result.user;

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email,
        });

        Router.push('/');
      }

    } catch (error) {
      showError(error.message);
    }
  }

  async function signOut() {
    firebase.auth().signOut();
    Router.reload(window.location.pathname);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLoadingUser(true);

      if (user) {
        const { displayName, photoURL, uid, email } = user;

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email,
        });
      }

      setLoadingUser(false);
    })

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signInWithGoogle,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      user,
      loadingUser,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }