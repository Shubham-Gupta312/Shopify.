import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";

const Register = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    console.log(phone, email, password, cPassword);
  };

  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src="" alt="" width="400" />
      </div>
 
      <Card>
        <div className={styles.form}>
          {/* <h1>S<span>hopify</span></h1> */}
          <h2>Create Account</h2>
          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Mobile Number"
              required
              autoComplete="on"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              required
              autoComplete="on"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              autoComplete="on"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              autoComplete="on"
              value={cPassword}
              onChange={(e)=>setCPassword(e.target.value)}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <span className={styles.register}>
            <p>Already have an account? </p>
            <Link to="/login">Signin</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Register;
