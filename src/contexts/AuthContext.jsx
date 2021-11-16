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

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

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

  async function signOut() {
    firebase.auth().signOut();
    Router.reload(window.location.pathname);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLoadingUser(true);

      if (user) {
        const { displayName, photoURL, uid, email } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

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
      user,
      loadingUser,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }