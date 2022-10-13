import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// uses createContext and exports a Provider wrapper
// un fichier qui utilise createContext et exporte un wrapper Provider

// wrap whatever component needs access to the Context state with the Provider
