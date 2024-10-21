import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidSignIn, checkValidSignUp } from "../utils/Validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const pwdRef = useRef(null);
  const cnfrmPwdRef = useRef(null);

  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignIn = () => {
    const msg = checkValidSignIn(emailRef.current.value, pwdRef.current.value);
    setErrMsg(msg);

    if (msg) return;

    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        pwdRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((err) => {
          const errorCode = err.code;
          const errorMessage = err.message;

          setErrMsg(errorCode + " - " + errorMessage);
        });
    }
  };

  const handleSignUp = () => {
    const msg = checkValidSignUp(
      emailRef.current.value,
      pwdRef.current.value,
      cnfrmPwdRef.current.value
    );
    setErrMsg(msg);

    if (msg) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        pwdRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          //update the display name
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;

              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((err) => {
              setErrMsg(err.code + " - " + err.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMsg(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
        alt="bgImage"
        className="absolute"
      />

      <form
        onSubmit={handleSubmit}
        className="absolute w-3/12 p-12 my-72 mx-auto right-0 left-0 bg-black bg-opacity-70 text-white text-center"
      >
        <h1 className="text-3xl font-bold m-2 p-2 text-left">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            ref={nameRef}
            placeholder="Full Name"
            className="p-4 my-2 w-full text-xl rounded-md bg-black bg-opacity-50"
          />
        )}

        <input
          type="email"
          ref={emailRef}
          placeholder="Email"
          className="p-4 my-2 w-full text-xl rounded-md bg-black bg-opacity-50"
        />
        <input
          type="password"
          ref={pwdRef}
          placeholder="Password"
          className="p-4 my-2 w-full text-xl rounded-md bg-black bg-opacity-50"
        />

        {!isSignIn && (
          <input
            type="password"
            ref={cnfrmPwdRef}
            placeholder="Confirm Password"
            className="p-4 my-2 w-full text-xl rounded-md bg-black bg-opacity-50"
          />
        )}

        <p className="text-xl text-red-600">{errMsg}</p>

        {isSignIn && (
          <button
            className="p-4 my-8 w-full bg-red-600 text-xl rounded-md"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        )}

        {!isSignIn && (
          <button
            className="p-4 my-8 w-full bg-red-600 text-xl rounded-md"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        )}

        <p
          className="text-xl underline cursor-pointer"
          onClick={toggleIsSignIn}
        >
          {isSignIn ? "New User? Sign up" : "Already have an account? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
