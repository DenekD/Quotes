import React from "react";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";

import DarkModeButton from "./DarkModeButton";

import { uiActions } from "../../store/ui-slice";
import AuthContext from "../../context/auth-context";

import classes from "./BurgerMenu.module.css";
import { Fragment } from "react";

const BurgerMenu = (props) => {
  const isBurgerMenuOpen = useSelector((state) => state.ui.isBurgerMenuOpen);
  const dispatch = useDispatch();

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const clickHandler = () => {
    dispatch(uiActions.toggleBurgerMenu());
  };

  const logoutHandler = () => {
    dispatch(uiActions.toggleBurgerMenu());

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
    <Fragment>
      <CSSTransition
        in={isBurgerMenuOpen}
        timeout={700}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: classes.slideEnter,
          enterActive: classes.slideEnterActive,
          exit: classes.slideExit,
          exitActive: classes.slideExitActive,
        }}
      >
        <section className={classes.container}>
          {isLoggedIn && (
            <div className={classes.whoIsLogged}>
              <p>zalogowany jako</p>
              <p>{authCtx.userEmail}</p>
            </div>
          )}
          <ul className={classes.menu}>
            <NavLink exact activeClassName={classes.activeLink} to="/">
              <li onClick={clickHandler}>strona główna</li>
            </NavLink>
            {!isLoggedIn && (
              <NavLink exact activeClassName={classes.activeLink} to="/login">
                <li onClick={clickHandler}>zaloguj się</li>
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink exact activeClassName={classes.activeLink} to="/profile">
                <li onClick={clickHandler}>twój profil</li>
              </NavLink>
            )}
            {isLoggedIn && (
              <span>
                <li onClick={logoutHandler}>wyloguj</li>
              </span>
            )}
            <NavLink exact activeClassName={classes.activeLink} to="/contact">
              <li onClick={clickHandler}>About me</li>
            </NavLink>

            <DarkModeButton />
          </ul>
        </section>
      </CSSTransition>
      <CSSTransition
        in={isBurgerMenuOpen}
        timeout={700}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: classes.fadeEnter,
          enterActive: classes.fadeEnterActive,
          exit: classes.fadeExit,
          exitActive: classes.fadeExitActive,
        }}
      >
        <div className={classes.overlay} onClick={clickHandler}></div>
      </CSSTransition>
    </Fragment>
  );
};

export default BurgerMenu;
