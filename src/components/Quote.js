import classes from "./Quote.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../context/auth-context";

import { quotesActions } from "../store/quote-slice";
import { uiActions } from "../store/ui-slice";

const Quote = (props) => {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  const quote = useSelector((state) => state.quotes.quotes[props.index]);

  const isAuth = authCtx.userId === quote.userId;

  const isVotedUp = quote.votedUpUsers.some((e) => e === authCtx.userId);
  const isVotedDown = quote.votedDownUsers.some((e) => e === authCtx.userId);

  const deleteHandler = () => {
    dispatch(quotesActions.deleteQuote(quote.id));
    dispatch(
      uiActions.openNotification({
        isNotificationOpen: true,
        message: "Cytat został pomyslnie usuniety",
        title: "Cytat został pomyslnie usuniety ",
        status: "success",
      })
    );
    setTimeout(() => {
      dispatch(uiActions.closeNotification());
    }, 4000);
  };

  const voteHandler = (value) => {
    dispatch(
      quotesActions.voteForQuote({
        id: quote.id,
        value,
        userId: authCtx.userId,
      })
    );
    dispatch(quotesActions.sortQuotes());
  };

  const canNotVoteHandler = () => {
    dispatch(
      uiActions.openNotification({
        isNotificationOpen: true,
        message: "Tylko zalogowani użytkownicy mogą głosować",
        title: "Musisz się zalogowac ",
        status: "info",
      })
    );
    setTimeout(() => {
      dispatch(uiActions.closeNotification());
    }, 4000);
  };

  return (
    <div className={classes.container}>
      <div className={classes.quote}>
        <div className={classes.quoteHeader}>
          <p>dodał: {quote.userName}</p>
        </div>
        <Link to={`quote/${quote.id}`}>
          <blockquote className={classes.otroBlockquote}>
            cytat: {quote.text}
            <span>{quote.author}</span>
          </blockquote>
        </Link>
        <div className={classes.quoteFooter}>
          {authCtx.isLoggedIn && (
            <div className={classes.vote}>
              <button
                onClick={() => voteHandler(true)}
                className={isVotedUp ? classes.votedUp : classes.notVoted}
              >
                <i className="fas fa-arrow-up"></i>
              </button>
              <p>{quote.vote}</p>
              <button
                onClick={() => voteHandler(false)}
                className={isVotedDown ? classes.votedDown : classes.notVoted}
              >
                <i className="fas fa-arrow-down"></i>
              </button>
            </div>
          )}
          {!authCtx.isLoggedIn && (
            <div className={classes.vote} onClick={canNotVoteHandler}>
              <button
                onClick={() => voteHandler(true)}
                className={classes.notVoted}
                disabled
              >
                <i className="fas fa-arrow-up"></i>
              </button>
              <p>{quote.vote}</p>
              <button
                onClick={() => voteHandler(false)}
                className={classes.notVoted}
                disabled
              >
                <i className="fas fa-arrow-down"></i>
              </button>
            </div>
          )}
          <Link to={`quote/${quote.id}`}>
            <div className={classes.commentsIcon}>
              <i className="far fa-comment-alt"></i>
              <p>{quote.commentsAmount} Comments</p>
            </div>
          </Link>
          {isAuth && (
            <button onClick={deleteHandler} className={classes.deleteBtn}>
              <i class="fas fa-trash-alt"></i>
              <p> usuń cytat</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quote;
