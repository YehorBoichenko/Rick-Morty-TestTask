/**
@component Login
@description A component that allows users to log in with their Google account via Firebase.
*/
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../services/firebase";
import { useEffect, useState } from "react";
import googleLogo from "../images/Google.webp";
import { User } from "../types/types";
const KEY = "user";

/**

@function Login
@description A component that handles user login using Firebase and Google.
@returns {JSX.Element} A React component that allows users to log in with their Google account.
*/
const Login = () => {
  const [user, setUser] = useState<User | null>(() => {
    const user = JSON.parse(localStorage.getItem(KEY) || "null");
    return user;
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(user));
  }, [user]);
/**

@function logIn
@description Logs the user in using Firebase and Google.
@returns {void}
*/
  const logIn = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const idToken = await result.user?.getIdToken();
        const newUser: User = {
          name: result.user?.displayName || "",
          token: idToken || "",
        };
        setUser(newUser);
      })
      .catch((error) => alert(error.message));
  };
/**

@function logOut
@description Logs the user out and sets the user state to null.
@returns {void}
*/
  const logOut = () => {
    setUser(null);
  };

  return (
    <div className="user">
      {user?.token ? (
        <div>
          <p className="user_name">Hello there! {user.name}</p>
          <button className="user_logOut" onClick={logOut}>
            Log out
          </button>
        </div>
      ) : (
        <button className="user-logIn" onClick={logIn}>
          Log in
          <img src={googleLogo} alt="Google logo" className="user-logo"></img>
        </button>
      )}
    </div>
  );
};

export default Login;
