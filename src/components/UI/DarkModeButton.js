import React from "react";
import classes from "./DarkModeButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const DarkModeButton = () => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const dispatch = useDispatch();

  const themeToggleHandler = () => {
    dispatch(uiActions.toggleDarkMode());
  };

  return (
    <button
      onClick={themeToggleHandler}
      className={`${classes.Button} ${
        isDarkMode ? classes.dark : classes.light
      }`}
    >
      <i class="fas fa-sun"></i>
      <i class="fas fa-moon"></i>

      {/* {isDarkMode ? <i class="fas fa-moon"></i> : <i class="fas fa-sun"></i>} */}
    </button>
  );
};

export default DarkModeButton;
