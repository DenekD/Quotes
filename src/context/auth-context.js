import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  userId: "",
  userName: "",
  userEmail: "",
  login: (token, expirationTime) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retriveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedUserId = localStorage.getItem("userId");
  const storedUserName = localStorage.getItem("userName");
  const storedEmail = localStorage.getItem("userEmail");
  const storedExpirationtime = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationtime);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    return null;
  }

  return {
    token: storedToken,
    userId: storedUserId,
    userName: storedUserName,
    userEmail: storedEmail,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retriveStoredToken();
  let initialToken;
  let initialUserId;
  let initialUserName;
  let initialUserEmail;
  if (tokenData) {
    initialToken = tokenData.token;
    initialUserId = tokenData.userId;
    initialUserName = tokenData.userName;
    initialUserEmail = tokenData.userEmail;
  }
  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialUserId);
  const [userName, setUserName] = useState(initialUserName);
  const [userEmail, setUserEmail] = useState(initialUserEmail);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setUserId(null);
    setUserName(null);
    setUserEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, userId, expirationTime, userName, userEmail) => {
    setToken(token);
    setUserId(userId);
    setUserName(userName);
    setUserEmail(userEmail);

    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    userId,
    userName,
    userEmail,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
