import { NavLink } from "react-router-dom";
import { useContext } from "react";
import classes from "./Footer.module.css";

import AuthContext from "../../context/auth-context";

const Footer = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div className={classes.footer}>
      <NavLink to={"/"}>
        <p>strona główna</p>
      </NavLink>
      {isLoggedIn ? (
        <NavLink to={"/profile"}>
          <p>profile</p>
        </NavLink>
      ) : (
        <NavLink to={"/login"}>
          <p>login</p>
        </NavLink>
      )}
      <NavLink to={"/contact"}>
        <p>kontakt</p>
      </NavLink>
    </div>
  );
};
export default Footer;
