import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img src="" alt=""  width='400'/>
        </div>
            
        <Card>
        <div className={styles.form}>
        {/* <h1>S<span>hopify</span></h1> */}
            <h2>Create Account</h2>
            <form action="">
                <input type="text" placeholder='Mobile Number' required autoComplete='on' />
                <input type="text" placeholder='Email' required
                autoComplete='on'/>
                <input type="password" placeholder='Password' required autoComplete='off' />
                <input type="password" placeholder='Confirm Password' required autoComplete='off' />
                <button className='--btn --btn-primary --btn-block'>Register</button> 
                
            </form>
            
            <span className={styles.register}>
                <p>Already have an account? </p>
                <Link to="/login">Signin</Link>
            </span>
        </div>
        </Card>
    </section>
  )
}

export default Register
