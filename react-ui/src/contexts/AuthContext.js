import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  function signup(username, email, password) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        return user.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
