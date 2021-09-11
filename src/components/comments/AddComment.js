import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthContext from "../../context/auth-context";
import { quotesActions } from "../../store/quote-slice";
import { uiActions } from "../../store/ui-slice";

import * as yup from "yup";
import classes from "./AddComment.module.css";

const schema = yup.object().shape({
  comment: yup
    .string()
    .required("No comment provided.")
    .min(3, "quote is too short - should be at least 3 chars minimum.")
    .matches(/[a-zA-Z]/, "quote can only contain Latin letters."),
});

const AddComment = (props) => {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFormHandler = (data) => {
    const enteredText = data.comment;
    dispatch(
      quotesActions.addComment({
        id: props.id,
        text: enteredText,
        userId: authCtx.userId,
        userName: authCtx.userName,
      })
    );
    reset();
    dispatch(
      uiActions.openNotification({
        isNotificationOpen: true,
        message: "Komentarz został dodany",
        title: "Komentarz został dodany",
        status: "success",
      })
    );
    setTimeout(() => {
      dispatch(uiActions.closeNotification());
    }, 4000);
  };

  return (
    <form onSubmit={handleSubmit(submitFormHandler)} className={classes.form}>
      <label htmlFor="comment">Komentarze</label>
      <div className={classes.commentBox}>
        <textarea
          {...register("comment")}
          id="comment"
          rows="5"
          className={errors.comment && classes.invalid}
        ></textarea>
        {errors.comment && (
          <p className={classes.error}>{errors.comment?.message}</p>
        )}

        <button className={classes.btn}>Add Comment</button>
      </div>
    </form>
  );
};
export default AddComment;
