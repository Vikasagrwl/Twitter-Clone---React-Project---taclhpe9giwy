import React, {useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Explore from "./component/pages/Explore";
import Notification from "./component/pages/Notification";
import Messages from "./component/pages/Messages";
import Bookmark from "./component/pages/Bookmark";
import TwitterBlue from "./component/pages/TwitterBlue";
import Profile from "./component/pages/Profile";
import { createContext } from "react";
import Login from "./component/logged out/Login";
import Signup from "./Signup/Signup";
import auth from "./Firebase";
import "./App.css";
export const myContext = createContext();

function App() {

  const [state, setState] = useState(true);

  const logOut = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("userDetails");
    auth.signOut();
  };

  const handleLogin = () => {
    setState(!state);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("userDetails", JSON.stringify(user));
        localStorage.setItem('isLoggedIn', true)
      }
    });
  }, []);

  return (
    <myContext.Provider value={{ handleLogin, logOut }}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/notification" element={<Notification />} />
            <Route exact path="/messages" element={<Messages />} />
            <Route exact path="/bookmark" element={<Bookmark />} />
            <Route exact path="/twitterBlue" element={<TwitterBlue />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </myContext.Provider>
  );
}

export default App;
