import React from "react";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Quote from "./Quote";
import LoadingSpinner from "./UI/LoadingSpinner";
import { quotesActions } from "../store/quote-slice";

import classes from "./MainContent.module.css";

const MainContent = () => {
  const quotes = useSelector((state) => state.quotes.quotes);
  const quoteIsLoading = useSelector((state) => state.quotes.quotesIsLoading);
  const dispatch = useDispatch();

  const clickHandler = (sortMethod) => {
    dispatch(quotesActions.setSortingMethod(sortMethod));
    dispatch(quotesActions.sortQuotes());
  };

  const list = quotes.map((quote, index) => {
    return (
      <li key={quote.id} className={classes.quote}>
        <Quote index={index} />
      </li>
    );
  });

  return (
    <Fragment>
      {quoteIsLoading && <LoadingSpinner />}

      {!quoteIsLoading && (
        <ul className={classes.list}>
          <div className={classes.sortButtons}>
            <button onClick={() => clickHandler(true)}>
              <i class="fas fa-sort-amount-up-alt"></i>
            </button>
            <button onClick={() => clickHandler(false)}>
              <i class="fas fa-sort-amount-down"></i>
            </button>
          </div>
          {list}
        </ul>
      )}
    </Fragment>
  );
};

export default MainContent;
