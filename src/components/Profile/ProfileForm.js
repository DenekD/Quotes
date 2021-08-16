import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classes from "./ProfileForm.module.css";

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitHandler = (data) => {
    const enteredPassword = data.newPassword;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCcQn6nzjLMzAdbJkC462HyFgAYzd508To",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        history.replace("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
      <h2> Tu możesz zmienić swoje hasło</h2>
      <label htmlFor="newPassword" className={classes.title}>
        Wpisz nowe hasło:
      </label>
      <input
        {...register("newPassword")}
        placeholder="new password"
        type="password"
        id="newPassword"
        name="newPassword"
        className={classes.input && classes.invalid}
      />
      <p className={classes.error}>{errors.newPassword?.message}</p>

      <button type="submit" className={classes.submit}>
        Change Password
      </button>
    </form>
  );
};

export default ProfileForm;
