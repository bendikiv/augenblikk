import React, { createContext, useEffect, useState } from "react";
import firebase from "firebase";

export const UserContext = createContext<firebase.User | null>(null);

export const UserProvider = (props: any) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
