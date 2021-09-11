import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchComments } from "../../store/comments-actions";

import CommentsList from "../comments/CommentsList";
// import LoadingSpinner from "./UI/LoadingSpinner";
import classes from "./QuotePage.module.css";

const QuotePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const quotes = useSelector((state) => state.quotes.quotes);
  // const commentsAreLoading = useSelector(
  //   (state) => state.quotes.commentsAreLoading
  // );

  let selectedQuote = quotes.filter((quote) => quote.id === id)[0] || {};

  return (
    <Fragment>
      <div className={classes.mainQuote}>
        <blockquote className={classes.otroBlockquote}>
          {selectedQuote.text}
          <span>{selectedQuote.author}</span>
        </blockquote>

        {/* {commentsAreLoading && <LoadingSpinner />} */}
        {/* {!commentsAreLoading && <CommentsList id={selectedQuote.id} />} */}
        <CommentsList id={selectedQuote.id} />
      </div>
    </Fragment>
  );
};

export default QuotePage;
