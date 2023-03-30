import React, { useState, useEffect } from "react";
import { twitterIcon } from "../component/icons/Icon";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged, updateProfile
} from "firebase/auth";
import { useContext } from "react";
import { myContext } from "../App";
import auth from "../Firebase";
import "./Signup.scss";

const Signup = () => {
  const [state, setState] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });
  const {changeUser}= useContext(myContext);

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then(async (authUser) => {
        const user = authUser.user;
        await updateProfile(user,{
          displayName:state.fullName
        });
        navigate("/")
        // changeUser(user)
      })
      .catch((error) => {
        if (state.fullName === "" || state.username === "") {
          alert("Please enter valid Details!");
        } else {
          alert(error.message);
        }
      });
  };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (authUser) => {
  //     if (authUser) {
  //       setUser(authUser);

  //       if (authUser.displayName) {
  //       } else {
  //         return authUser.providerData({
  //           displayName: state.username,
  //         });
  //       }
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, [user, state.username]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signup_container">
      <form onSubmit={signUp}>
        <div className="icon">{twitterIcon}</div>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="fullname"
          name="fullName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        {/* <input type="date" onChange={handleChange} name="dob"/> */}
        <button type="submit" className="signup_btn">
          Sign Up
        </button>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
