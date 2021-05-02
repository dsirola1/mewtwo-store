import React, { useContext, createContext, useState } from 'react';

const authContext = createContext();

const useProvideAuth = () => {
  const [user, setUser] = useState({
    id: null,
    email: null,
    firstname: null,
    isAuthenticated: false,
  });
  const signin = (id, email, firstname, cb) => {
    setUser({
      ...user,
      id,
      email,
      firstname,
      isAuthenticated: true,
    });
    cb();
  };

  const signup = (id, email, firstname, cb) => {
    setUser({
      ...user,
      id,
      email,
      firstname,
      isAuthenticated: true,
    });
    cb();
  };

  const signout = (cb) => {
    setUser({
      id: null,
      email: null,
      firstname: null,
      isAuthenticated: false,
    });
    cb();
  };

  return { user, signin, signup, signout };
};

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
