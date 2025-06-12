import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  //   onAuthStateChanged,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from '../../css/login.module.css'

const firebaseConfig = {
  apiKey: "AIzaSyDVRMv5ZYuYFRKIRTM1U2YBEBYiiDIePaw",
  authDomain: "ai-mini-app-b7961.firebaseapp.com",
  projectId: "ai-mini-app-b7961",
  storageBucket: "ai-mini-app-b7961.firebasestorage.app",
  messagingSenderId: "1074294696018",
  appId: "1:1074294696018:web:87b5d057a6b998aaa9178b",
  measurementId: "G-84T7JWFXLY",
};
export default function Login() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [signIn, setSignIn] = useState("");
  const navigation = useNavigate();

  localStorage.setItem("signedIn", signIn);

  useEffect(() => {
    async function signInWithGoogle() {
      signInWithRedirect(auth, provider);

      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const user = result.user;
          console.log("User signed in: ", user);
        }
      } catch (error: any) {
        if (error.code === "auth/cancelled-popup-request") {
          console.log("User closed the popup or cancelled the request.");
        } else {
          console.log("Error during sign-in:", error);
        }
      }
    }
    /*@ts-expect-error */
    setSignIn(signInWithGoogle());
  }, []);

  const handleUsername = (value: string) => {
    const username = document.getElementById("username") as HTMLElement;

    if (value.length >= 3) {
      username.style.color = "green";
    } else {
      username.style.color = "red";
    }
  };

  const handlePassword = (value: string) => {
    const password = document.getElementById("password") as HTMLElement;

    if (value.length >= 6) {
      password.style.color = "green";
    } else {
      password.style.color = "red";
    }
  };

  const isColorGreen = () => {
    const password = document.getElementById("password");
    const username = document.getElementById("username");

    if (password?.style.color && username?.style.color == "green") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="username">Username </label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => handleUsername(e.target.value)}
        className={style.input}
      />
      <br />
      <label htmlFor="password">Password </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => handlePassword(e.target.value)}
        className={style.input}
      />
      <br />
      <button
        onClick={() => {
          if (isColorGreen()) {
            setSignIn("true");
            navigation("/");
          }
          return;
        }}
        className={style.signin}
      >
        sign in
      </button>
    </div>
  );
}
