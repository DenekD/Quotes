import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useSelector } from "react-redux";

import classes from "./Hamburger.module.css";

const Hamburger = () => {
  const isBurgerMenuOpen = useSelector((state) => state.ui.isBurgerMenuOpen);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(uiActions.toggleBurgerMenu());
  };

  return (
    <>
      <div className={classes.burger} onClick={clickHandler}>
        <i className={isBurgerMenuOpen ? classes.open : classes.closed}></i>
        <i className={isBurgerMenuOpen ? classes.open : classes.closed}></i>
        <i className={isBurgerMenuOpen ? classes.open : classes.closed}></i>
      </div>
    </>
  );
};

export default Hamburger;
