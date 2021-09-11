import { useDispatch } from "react-redux";
import { useContext, useState } from "react";
import { Fragment } from "react";

import CommentEditForm from "./CommentEditForm";
import UserImage from "../UI/UserImage";

import { CSSTransition } from "react-transition-group";

import { uiActions } from "../../store/ui-slice";
import { quotesActions } from "../../store/quote-slice";
import AuthContext from "../../context/auth-context";

import classes from "./Comment.module.css";

const Comment = (props) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const authCtx = useContext(AuthContext);
  const isAuth = authCtx.userId === props.userId;

  const removeOneComment = () => {
    dispatch(quotesActions.deletecomment({ id: props.id, index: props.index }));
    dispatch(
      uiActions.openNotification({
        isNotificationOpen: true,
        title: "comment successfully removed",
        message: "komentarz został usunięty ",
        status: "success",
      })
    );
    setTimeout(() => {
      dispatch(uiActions.closeNotification());
    }, 4000);
  };

  const edittingHandler = () => {
    setIsEdit((prevState) => !isEdit);
  };

  const editOneComment = (editedText) => {
    dispatch(
      quotesActions.editComment({
        id: props.id,
        index: props.index,
        editedText,
      })
    );
    dispatch(
      uiActions.openNotification({
        isNotificationOpen: true,
        title: "comment succesfully edited",
        message: "komentarz został  zmieniony",
        status: "success",
      })
    );
    setTimeout(() => {
      dispatch(uiActions.closeNotification());
    }, 4000);
    edittingHandler();
  };

  return (
    <Fragment>
      <div className={classes.commentHeader}>
        <UserImage displaySpot={false} />
        <p>{props.userName}</p>
        <p> {props.date}</p>
      </div>
      <div className={classes.mainComment}>
        <p>{props.commentText}</p>

        {isAuth && (
          <button onClick={removeOneComment} className={classes.btn}>
            usuń komentarz{" "}
          </button>
        )}
        {isAuth && (
          <button onClick={edittingHandler} className={classes.btn}>
            {isEdit ? "zakończ edycje" : "edytuj"}
          </button>
        )}
        <CSSTransition
          in={isEdit}
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
          {/* {isEdit && <CommentEditForm editForm={editOneComment} />} */}
          <CommentEditForm editForm={editOneComment} />
        </CSSTransition>
      </div>
    </Fragment>
  );
};
export default Comment;
