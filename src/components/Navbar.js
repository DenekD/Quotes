import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import AuthContext from "../context/auth-context";
import Hamburger from "./UI/Hamburger";
import UserImage from "./UI/UserImage";

import classes from "./Navbar.module.css";
// import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authCtx.logout();
    //notification
    dispatch(
      uiActions.openNotification({
        isNotificationOpen: true,
        title: "logout succesful",
        message: "wylogowałeś się poprawnie",
        status: "success",
      })
    );
    setTimeout(() => {
      dispatch(uiActions.closeNotification());
    }, 4000);
  };

  return (
    <header className={classes.header}>
      <div className={classes.burgerAndTitle}>
        <Hamburger />

        <Link to="/">
          <h1>Quotes</h1>
        </Link>
      </div>
      <nav>
        <ul className={classes.nav}>
          <li>
            <UserImage />
          </li>
          {!isLoggedIn && (
            <li>
              <Link to="/login">
                <p>Login/Sign In</p>
              </Link>
            </li>
          )}
          {/* {isLoggedIn && (
            <li className={classes.cog}>
              <Link to="/profile">
                <i class="fas fa-cog"></i>
              </Link>
            </li>
          )} */}
          {isLoggedIn && (
            <li>
              <p onClick={logoutHandler}>Logout</p>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
