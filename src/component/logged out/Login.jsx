import { useState, useEffect } from "react";
import { twitterIcon } from "../icons/Icon";
import auth from "../../Firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../App";
import { useContext } from "react";

import "./loggedOut.scss";

const Login = () => {
  
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(myContext);
  const navigate = useNavigate();
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailOrUsername, password)
      .then(() => {
        localStorage.setItem("isLoggedIn", "true");
        handleLogin();
      })
      .catch((error) => {
        alert(error.message);
        setEmailOrUsername("");
        setPassword("");
      });
  };

  return (
    <>
      {isLoggedIn ? (
        navigate("/home")
      ) : (
        <div className="login-form">
          <form onSubmit={signIn}>
            <div className="icon">{twitterIcon}</div>
            <input
              type="email"
              placeholder="username"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <button type="submit" className="login_btn">
                Login
              </button>
            </div>
            <p>
              if don't have any account?{" "}
              <span onClick={() => navigate("/signup")}>Sign Up</span>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
