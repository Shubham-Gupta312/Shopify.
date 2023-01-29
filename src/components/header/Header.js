import React, { useState } from "react";
import styles from "./Header.module.scss";
import { NavLink, NavNavLink } from "react-router-dom";
import { FaShoppingCart,FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const logo = (
  <div className={styles.logo}>
    <NavLink to="/">
      <h2>
        S<span>hopify</span>
      </h2>
    </NavLink>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <NavLink to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </NavLink>
  </span>
);

const activeLink = ({isActive}) => 
  (isActive ? `${styles.active}` : "");


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className={styles.header}>
        {logo}

        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }>
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            } onClick={hideMenu}></div>


            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={22} color="fff" onClick={hideMenu}/>
              </li>
              <li>
                <NavLink className={activeLink} to="/">Home</NavLink>
              </li>
              <li>
              <NavLink  className={activeLink} to="/contact">Contact Us</NavLink>
              </li>
              <li>
              <NavLink  className={activeLink} to="/product">Products</NavLink>
              </li>
            </ul>

            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                <NavLink  className={activeLink} to="/login">Login</NavLink>
                <NavLink  className={activeLink} to="/register">Register</NavLink>
                <NavLink  className={activeLink} to="/orderHistory">My Orders</NavLink>
              </span>
              {cart}
            </div>
          
        </nav>

        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
