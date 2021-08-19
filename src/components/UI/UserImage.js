import React, { useContext } from "react";
import { Fragment } from "react";
import AuthContext from "../../context/auth-context";
import classes from "./UserImage.module.css";

const UserImage = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.image}>
          <i class="fas fa-user"></i>
        </div>
        {isLoggedIn && <span className={classes.spot}></span>}
      </div>
    </Fragment>
  );
};
export default UserImage;
