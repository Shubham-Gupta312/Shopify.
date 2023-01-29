import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./auth.module.scss";
import {FaGoogle} from 'react-icons/fa';
import loginImg from "../../assets/login.png"


const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img src={loginImg} alt="Login"  width='400'/>
        </div>
            
        
        <div className={styles.form}>
        {/* <h1>S<span>hopify</span></h1> */}
            <h2>Sign In</h2>
            <form action="">
                {/* <input type="text" placeholder='Mobile Number' required autoComplete='on' /> */}
                <input type="text" placeholder='Email' required
                autoComplete='on'/>
                <input type="password" placeholder='Password' required autoComplete='off' />
                <button className='--btn --btn-primary --btn-block'>Sign in</button>

                <div className={styles.links}>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <p>-- or -- </p>
                
            </form>
            <button className='--btn --btn-danger --btn-block'> <FaGoogle color="#fff"/> Continue with Google</button>
            <span className={styles.register}>
                {/* <p>Don't have an account? </p> */}
                <Link to="/register"> Create Account</Link>
            </span>
        </div>
        
    </section>
  )
}

export default Login
