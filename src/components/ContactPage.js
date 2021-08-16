import React from "react";
import { Fragment } from "react";
// import { Link } from "react-router-dom";
import classes from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <Fragment>
      <ul className={classes.list}>
        <h1>About me</h1>
        <a target="_blank" rel="noreferrer" href="https://github.com/DenekD">
          <li>
            <i class="fab fa-github"></i>
          </li>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/tomasz.denkiewicz.1/"
        >
          <li>
            <i class="fab fa-facebook"></i>
          </li>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/tomasz-denkiewicz-70700276/"
        >
          <li>
            <i class="fab fa-linkedin"></i>
          </li>
        </a>
      </ul>
    </Fragment>
  );
};
export default ContactPage;
