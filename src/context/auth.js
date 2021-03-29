import React from "react";

export const AuthContext = React.createContext({});

const isValidToken = () => {
  const token = localStorage.getItem("pickbazar_token");
  // JWT decode & check token validity & expiration.
  if (token) return true;
  return false;
};

const AuthProvider = (props) => {
  const [isAuthenticated, makeAuthenticated] = React.useState(isValidToken());
  function authenticate({ email, password }, cb) {
    makeAuthenticated(true);
    localStorage.setItem("payer_token", `${email}.${password}`);
    setTimeout(cb, 100); // fake async
  }
  function signout(cb) {
    makeAuthenticated(false);
    localStorage.removeItem("payer_token");
    setTimeout(cb, 100);
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        signout,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
