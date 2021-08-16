import { useState, useContext } from "react";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { uiActions } from "../store/ui-slice";

import classes from "./AuthPage.module.css";

// import classes from "./AuthForm.module.css";
import AuthContext from "../context/auth-context";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // const emailInputRef = useRef();
  // const passwordInputRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const authCtx = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (data) => {
    const enterdEmail = data.email;
    const enteredPassword = data.password;

    setIsLoading(true);
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcQn6nzjLMzAdbJkC462HyFgAYzd508To";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcQn6nzjLMzAdbJkC462HyFgAYzd508To";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enterdEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": " application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + data.expiresIn * 1000
        );

        const userName = data.email.substring(0, data.email.lastIndexOf("@"));
        const userEmail = data.email;

        authCtx.login(
          data.idToken,
          data.localId,
          expirationTime.toISOString(),
          userName,
          userEmail
        );
        history.replace("/");

        // notfication
        dispatch(
          uiActions.openNotification({
            isNotificationOpen: true,
            title: `${isLogin ? "Login" : "SignIn"} Successful`,
            message: `${
              isLogin ? "zalogowałeś" : "zarejestrowałeś"
            } się jako ${userEmail}`,
            status: "success",
          })
        );
        setTimeout(() => {
          dispatch(uiActions.closeNotification());
        }, 4000);
      })
      .catch((err) => {
        //notification
        dispatch(
          uiActions.openNotification({
            isNotificationOpen: true,
            icationOpen: true,
            title: `${isLogin ? "Login" : "SignIn"} Failed`,
            message: `${err}`,
            status: "error",
          })
        );
        setTimeout(() => {
          dispatch(uiActions.closeNotification());
        }, 4000);
      });
  };

  return (
    <section className={classes.container}>
      <section className={classes.header}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        {isLogin && (
          <div>
            <p>jesteś tutaj nowy? </p>
            <span onClick={switchAuthModeHandler}> Zarejestruj się</span>
          </div>
        )}
        {!isLogin && (
          <div>
            <p>Jesteś już jednym z nas? </p>
            <span onClick={switchAuthModeHandler}> Zaloguj się</span>
          </div>
        )}
      </section>

      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <div className={classes.email}>
          <label htmlFor="email">Your Email</label>
          <input
            {...register("email")}
            type="email"
            id="email"
            required
            className={errors.email && classes.invalid}
          />
          <p className={classes.error}>{errors.email?.message}</p>
        </div>
        <div className={classes.password}>
          <label htmlFor="password">Your Password</label>
          <input
            {...register("password")}
            type="password"
            id="password"
            required
            className={errors.password && classes.invalid}
          />
          <p className={classes.error}>{errors.password?.message}</p>
        </div>
        <div>
          {!isLoading && (
            <button className={classes.submit}>
              {isLogin ? "Zaloguj się" : "Zarejestruj się"}
            </button>
          )}
          {isLoading && <p>sending request... </p>}
        </div>
      </form>
    </section>
  );
};

export default AuthPage;
