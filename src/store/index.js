import { configureStore } from "@reduxjs/toolkit";
// import commentsSlice from "./comment-slice";
import quoteSlice from "./quote-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    quotes: quoteSlice.reducer,
    ui: uiSlice.reducer,
    // comments: commentsSlice.reducer,
  },
});

export default store;
