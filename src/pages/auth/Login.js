import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.scss";
import { FaGoogle } from "react-icons/fa";
import loginImg from "../../assets/login.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    // console.log(email);
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        setIsLoading(false);
        toast.success("Welcome back!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  // Login with Google
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully!")
        navigate("/")
      })
      .catch((error) => {
       toast.error(error.message)
      });
  };

  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>

        <div className={styles.form}>
          {/* <h1>S<span>hopify</span></h1> */}
          <h2>Sign In</h2>
          <form onSubmit={loginUser}>
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="on"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Sign in
            </button>

            <div className={styles.links}>
              <Link to="/reset">Forgot Password</Link>
            </div>
            <p>-- or -- </p>
          </form>
          <button
            className="--btn --btn-danger --btn-block"
            onClick={signInWithGoogle}
          >
            {" "}
            <FaGoogle color="#fff" /> Continue with Google
          </button>
          <span className={styles.register}>
            {/* <p>Don't have an account? </p> */}
            <Link to="/register"> Create Account</Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default Login;
