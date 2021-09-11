import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthContext from "../../context/auth-context";
import { quotesActions } from "../../store/quote-slice";
import { uiActions } from "../../store/ui-slice";

import classes from "./AddNewQuote.module.css";

const schema = yup.object().shape({
  autor: yup.string().required(),
  quote: yup
    .string()
    .required("No quote provided.")
    .min(8, "quote is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "quote can only contain Latin letters."),
});

const AddNewQuote = (props) => {
  const [isAcordeonOpen, setAcordeonOpen] = useState(false);
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const acordeonClickHandler = () => {
    setAcordeonOpen((prevState) => !prevState);
  };

  const submintHandler = (data) => {
    const enteredAutor = data.autor;
    const enteredQuote = data.quote;
    dispatch(
      quotesActions.addQuote({
        text: enteredQuote,
        user: authCtx.userName,
        author: enteredAutor,
        userId: authCtx.userId,
        userName: authCtx.userName,
      })
    );
    reset();
    dispatch(quotesActions.sortQuotes());
    setAcordeonOpen(false);
    dispatch(
      uiActions.openNotification({
        isNotificationOpen: true,
        message: "Cytat został dodany",
        title: "Cytat został dodany",
        status: "success",
      })
    );
    setTimeout(() => {
      dispatch(uiActions.closeNotification());
    }, 4000);
  };

  return (
    <section className={classes.container}>
      <div className={classes.acordeon} onClick={acordeonClickHandler}>
        Dodaj nowy cytat
        <span className={classes.icon}>
          <i className={isAcordeonOpen ? classes.open : classes.closed}></i>
        </span>
      </div>

      <CSSTransition
        in={isAcordeonOpen}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: classes.slideEnter,
          enterActive: classes.slideEnterActive,
          exit: classes.slideExit,
          exitActive: classes.slideExitActive,
        }}
      >
        <div className={classes.acordeonContainer}>
          <h2>Wpisz imię autora i cytat który chcesz dodać</h2>
          <form
            onSubmit={handleSubmit(submintHandler)}
            className={classes.form}
          >
            <div className={classes.autor}>
              <label htmlFor="author">Author: </label>
              <input
                {...register("autor")}
                type="text"
                id="author"
                className={errors.autor && classes.invalid}
              />
              <p className={classes.error}>{errors.autor?.message}</p>
            </div>
            <div className={classes.quote}>
              <label htmlFor="quote">Cytat: </label>
              <textarea
                {...register("quote")}
                type="text"
                id="quote"
                className={errors.quote && classes.invalid}
              />
              <p className={classes.error}>{errors.quote?.message}</p>
            </div>
            <button className={classes.submit}>dodaj cytat</button>
          </form>
        </div>
      </CSSTransition>
    </section>
  );
};

export default AddNewQuote;
