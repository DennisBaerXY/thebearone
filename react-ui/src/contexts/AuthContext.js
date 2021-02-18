import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  async function signup(username, email, password) {
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);

      await user.user.updateProfile({
        displayName: username,
      });

      const doc = await db.collection("users").add({
        uid: user.user.uid,
        todoLists: [],
        username: user.user.displayName,
        recentlyVisitedTodoLists: [],
      });

      console.log("Document written with ID: ", doc.id);
    } catch (err) {
      console.error(err);
    }
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
