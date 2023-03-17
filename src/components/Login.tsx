import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../services/firebase";
import { useEffect, useState } from "react";
import googleLogo from "../images/Google.webp";

const KEY = "user";

type User = {
  name: string;
  token: string;
};

const Login = () => {
  const [user, setUser] = useState<User | null>(() => {
    const user = JSON.parse(localStorage.getItem(KEY) || "null");
    return user;
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(user));
  }, [user]);

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
