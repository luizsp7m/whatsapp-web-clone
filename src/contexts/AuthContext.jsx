import { createContext, useEffect, useState } from "react";

import { auth, firebase } from '../services/firebase';

import Router from 'next/router';

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

      // setTimeout(() => setLoadingUser(false), 2000);
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
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }