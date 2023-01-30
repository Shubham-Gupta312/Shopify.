import React from 'react';
import ReactDOM from 'react-dom';
import loaderImg from "../../assets/loader.gif";
import styles from "./Loader.module.scss";


const Loader = () => {
  return ReactDOM.createPortal (
      <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src={loaderImg} alt="Processing..." />
        </div>
      </div>,
      document.getElementById("loader")
  )
}

export default Loader