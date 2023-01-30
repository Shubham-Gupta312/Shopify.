import React from 'react'
import styles from "./auth.module.scss";
import resetImg from "../../assets/forgot.png";
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img src={resetImg} alt="Forgot"  width='400'/>
        </div>
        <Card>       
        <div className={styles.form}>
        {/* <h1>S<span>hopify</span></h1> */}
            <h2>Reset Password</h2>
            <form action="">
                <input type="text" placeholder='Email' required
                autoComplete='on'/>
                <button className='--btn --btn-primary --btn-block'>Reset Password</button>

                <div className={styles.links}>
                  <p>
                    <Link to="/login"><b>Sign in</b></Link>
                  </p>
                  <p>
                    <Link to="/register"><b>Create Account</b></Link>
                  </p>
                </div>
                
            </form>
        </div>
        </Card>
    </section>
  )
}

export default Reset
