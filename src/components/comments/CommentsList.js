import React, { Fragment, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import Comment from "./Comment";
import AddComment from "./AddComment";

import AuthContext from "../../context/auth-context";

import classes from "./CommentList.module.css";

const CommnetsLists = (props) => {
  const [isCommentsOpen, setCommentsOpen] = useState(true);
  const authCtx = useContext(AuthContext);
  const comments = useSelector((state) => state.quotes.comments);
  let foundComment = comments.findIndex((c) => c.id === props.id);

  const clickHandler = () => {
    setCommentsOpen((prevState) => !prevState);
  };

  let commentsList = <p> brak komentarzy </p>;

  if (foundComment >= 0 && comments[foundComment].comments !== undefined) {
    commentsList = comments[foundComment].comments.map((comment, index) => {
      return (
        <li className={classes.comment} key={index}>
          <Comment
            commentText={comment.text}
            date={comment.date}
            userId={comment.userId}
            userName={comment.userName}
            index={index}
            id={props.id}
          />
        </li>
      );
    });
  }

  return (
    <Fragment>
      <div className={classes.container}>
        {authCtx.isLoggedIn && <AddComment id={props.id} />}

        <button onClick={clickHandler} className={classes.btnShowComments}>
          {isCommentsOpen ? "zwiń komentarze" : "pokaż komentarze"}
        </button>
        <CSSTransition
          in={isCommentsOpen}
          timeout={400}
          mountOnEnter
          unmountOnExit
          classNames={{
            enter: classes.slideEnter,
            enterActive: classes.slideEnterActive,
            exit: classes.slideExit,
            exitActive: classes.slideExitActive,
          }}
        >
          <div className={classes.list}>{commentsList}</div>
        </CSSTransition>
      </div>
    </Fragment>
  );
};

export default CommnetsLists;
