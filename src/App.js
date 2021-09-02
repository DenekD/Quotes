// import "./App.css";

import React, { Suspense } from "react";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContet";
import AddNewQuote from "./components/AddNewQuote";
import AuthPage from "./components/AuthPage";
import UserProfile from "./components/Profile/UserProfile";
import BurgerMenu from "./components/UI/BurgerMenu";
import Modal from "./components/UI/Modal";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import QuotePage from "./components/QuotePage";
import ContactPage from "./components/ContactPage";
import Notification from "./components/UI/Notification";
import Footer from "./components/Footer/Footer";

import { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendQuotesData, fetchQuotes } from "./store/quote-actions";
import { sendCommentsData } from "./store/comments-actions";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthContext from "./context/auth-context";
import classes from "./App.module.css";

// const QuotePage = React.lazy(() => import("./components/QuotePage"));

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.quotes);
  const comments = useSelector((state) => state.quotes.comments);
  const quotesChanged = useSelector((state) => state.quotes.quotesChanged);
  const commentsChanged = useSelector((state) => state.quotes.commentsChanged);
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (quotesChanged) {
      dispatch(sendQuotesData(quotes));
    }
    if (commentsChanged) {
      dispatch(sendCommentsData(comments));
    }
  }, [dispatch, quotes, quotesChanged, comments, commentsChanged]);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  // const classes =
  // <div  className={`${styles.class1} ${!isValid && styles.class2}`}></div>

  return (
    <div className={` ${isDarkMode ? classes.darkMode : classes.lightMode}`}>
      <Modal />
      <Navbar />
      <BurgerMenu />
      <Notification />
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <div className={classes.container}>
          <Switch>
            <Route path="/" exact>
              {authCtx.isLoggedIn && <AddNewQuote />}
              <MainContent />
            </Route>
            <Route path="/login" exact>
              <AuthPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
            <Route path="/quote/:id">
              <QuotePage />
            </Route>
            <Route path="/profile">
              {authCtx.isLoggedIn && <UserProfile />}
              {!authCtx.isLoggedIn && <Redirect to="/login" />}
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
