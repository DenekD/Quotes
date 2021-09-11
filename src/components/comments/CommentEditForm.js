import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import classes from "./CommentEditForm.module.css";

const schema = yup.object().shape({
  comment: yup
    .string()
    .required("No comment provided.")
    .min(3, "quote is too short - should be at least 3 chars minimum.")
    .matches(/[a-zA-Z]/, "quote can only contain Latin letters."),
});

const CommentEditForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitHandler = (data) => {
    const editedText = data.comment;
    props.editForm(editedText);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
      <label htmlFor="comment" className={classes.label}>
        wpisz nowy komentarz
      </label>
      <textarea {...register("comment")} id="comment" rows="5"></textarea>
      {errors.comment && (
        <p className={classes.error}>{errors.comment?.message}</p>
      )}
      <button>zmień komentarz</button>
    </form>
  );
};
export default CommentEditForm;
