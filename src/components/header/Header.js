import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER } from "../../redux/slice/authSlice";
import { REMOVE_ACTIVE_USER} from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogOut } from "../hiddenLink/HiddenLink";

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

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDispalyName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user)
        // User is signed in, see docs for a list of available properties
        // const uid = user.uid;
        // console.log(user.displayName);
        if(user.displayName == null){
          const u1 = user.email.substring(0, user.email.indexOf("@")) ;
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
          // console.log(uName)
          setDispalyName(uName);
          
        }else{
          setDispalyName(user.displayName);

        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        // User is signed out
        setDispalyName("");
        dispatch(
          REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <header>
        <div className={styles.header}>
          {logo}

          <nav
            className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }
          >
            <div
              className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }
              onClick={hideMenu}
            ></div>

            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={22} color="fff" onClick={hideMenu} />
              </li>
              <li>
                <NavLink className={activeLink} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLink} to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLink} to="/product">
                  Products
                </NavLink>
              </li>
            </ul>

            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                <ShowOnLogOut>
                <NavLink className={activeLink} to="/login">
                  Login
                </NavLink>
                </ShowOnLogOut>
                <ShowOnLogin>
                <a href="#home">
                  <FaUserCircle size={16} />
                   Hi, {displayName}
                </a>
                </ShowOnLogin>
                <ShowOnLogin>
                <NavLink className={activeLink} to="/orderHistory">
                  My Orders
                </NavLink>
                </ShowOnLogin>
                <ShowOnLogin>
                <NavLink to="/" onClick={signOutUser}>
                  Sign Out
                </NavLink>
                </ShowOnLogin>
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
    </>
  );
};

export default Header;
