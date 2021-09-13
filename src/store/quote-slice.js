import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  quotesChanged: false,
  commentsChanged: false,
  quotesAreLoading: false,
  commentsAreLoading: false,
  isSortAscending: false,
  quotes: [],
  comments: [],
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    quotesAreLoading(state, action) {
      console.log("quotes loading...");
      state.quotesIsLoading = true;
    },
    quotesAreDownload(state, action) {
      console.log("quotes download...");
      state.quotesIsLoading = false;
    },
    // commentsAreLoading(state, action) {
    //   console.log("comments loading...");
    //   state.quotesIsLoading = true;
    // },
    // commentsAreDownload(state, action) {
    //   console.log("comments download...");
    //   state.quotesIsLoading = false;
    // },
    addQuote(state, action) {
      console.log("addQuote");
      state.quotesChanged = true;
      const newQuote = action.payload;
      state.quotes.push({
        author: newQuote.author,
        text: newQuote.text,
        id: uuidv4(),
        date: Date.now(),
        commentsAmount: 0,
        userId: newQuote.userId,
        userName: newQuote.userName,
        vote: 0,
        votedUpUsers: [""],
        votedDownUsers: [""],
      });
    },
    replaceQuotes(state, action) {
      console.log("replace Quotes");
      state.quotes = action.payload.quotes;
    },

    replaceComments(state, action) {
      state.comments = action.payload.comments;
    },
    deleteQuote(state, action) {
      state.quotesChanged = true;
      const deletedId = action.payload;
      state.quotes = state.quotes.filter((quote) => quote.id !== deletedId);
      state.comments = state.comments.filter(
        (comment) => comment.id !== deletedId
      );
    },
    voteForQuote(state, action) {
      state.quotesChanged = true;
      const voteddQuoteId = action.payload.id;
      const votedValue = action.payload.value;
      const votedUser = action.payload.userId;
      const votedQuoteIndex = state.quotes.findIndex(
        (q) => q.id === voteddQuoteId
      );

      const isAllreadyUpVoted = state.quotes[votedQuoteIndex].votedUpUsers.some(
        (e) => e === votedUser
      );
      const isAllreadyDownVoted = state.quotes[
        votedQuoteIndex
      ].votedDownUsers.some((e) => e === votedUser);

      if (votedValue && isAllreadyUpVoted) {
        // console.log("juz głosowałeś na plus i resetujesz plusa");
        state.quotes[votedQuoteIndex].vote -= 1;
        state.quotes[votedQuoteIndex].votedUpUsers = state.quotes[
          votedQuoteIndex
        ].votedUpUsers.filter((id) => id !== votedUser);
        return;
      }

      if (!votedValue && isAllreadyDownVoted) {
        // console.log("juz głosowałeś na minus i resetujesz minusa");
        state.quotes[votedQuoteIndex].vote += 1;
        state.quotes[votedQuoteIndex].votedDownUsers = state.quotes[
          votedQuoteIndex
        ].votedDownUsers.filter((id) => id !== votedUser);
        return;
      }

      if (votedValue && isAllreadyDownVoted) {
        state.quotes[votedQuoteIndex].vote += 2;
        //removing user from votedDownUsers
        state.quotes[votedQuoteIndex].votedDownUsers = state.quotes[
          votedQuoteIndex
        ].votedDownUsers.filter((id) => id !== votedUser);
        //adding user to votedUpUsers
        state.quotes[votedQuoteIndex].votedUpUsers.push(votedUser);
        // console.log("najpierw minus pozniej plus");
        return;
      }

      if (!votedValue && isAllreadyUpVoted) {
        state.quotes[votedQuoteIndex].vote -= 2;
        //removig user form votedUpUsers
        state.quotes[votedQuoteIndex].votedUpUsers = state.quotes[
          votedQuoteIndex
        ].votedUpUsers.filter((id) => id !== votedUser);
        // adding user to votedDownUsers
        state.quotes[votedQuoteIndex].votedDownUsers.push(votedUser);
        // console.log("najpierw plus później minus");
        return;
      }

      if (votedValue) {
        state.quotes[votedQuoteIndex].vote += 1;
        state.quotes[votedQuoteIndex].votedUpUsers.push(votedUser);
        console.log("plus pierwszy ");
      } else {
        state.quotes[votedQuoteIndex].vote -= 1;
        state.quotes[votedQuoteIndex].votedDownUsers.push(votedUser);
        console.log("minus pierwszy");
      }
    },
    sortQuotes(state) {
      console.log("sort Quotes");
      state.quotes.sort((quoteA, quoteB) => {
        if (state.isSortAscending) {
          return quoteA.vote > quoteB.vote ? 1 : -1;
        } else {
          return quoteA.vote < quoteB.vote ? 1 : -1;
        }
      });
    },
    setSortingMethod(state, action) {
      state.isSortAscending = action.payload;
    },
    addComment(state, action) {
      state.commentsChanged = true;
      state.quotesChanged = true;

      const newComment = {
        text: action.payload.text,
        date: new Date().toLocaleDateString(),
        author: "",
        userId: action.payload.userId,
        userName: action.payload.userName,
      };
      // checking if quote have any comments, if comments have index with action.id
      const existingCommentIndex = state.comments.findIndex(
        (com) => com.id === action.payload.id
      );
      //checking quote index in quotes
      const quoteIndex = state.quotes.findIndex(
        (q) => q.id === action.payload.id
      );

      //if first comment then create array element with quote id
      if (existingCommentIndex === -1) {
        state.comments = [
          ...state.comments,
          {
            id: action.payload.id,
            comments: [newComment],
          },
        ];
        // adding length of comments to quotes[index].commentsAmount
        state.quotes[quoteIndex].commentsAmount = 1;
      } else {
        // case when all comments are removed so existing comment in array have id but there's no comments array inside
        if (state.comments[existingCommentIndex].comments === undefined) {
          state.comments[existingCommentIndex].comments = [];
        }

        state.comments[existingCommentIndex].comments.push(newComment);
        // adding length of comments to quotes[index].commentsAmount
        state.quotes[quoteIndex].commentsAmount =
          state.comments[existingCommentIndex].comments.length;
        // console.log(current(state.comments[existingQuoteIndex]));
      }
    },
    deletecomment(state, action) {
      state.commentsChanged = true;
      const deletedId = action.payload.id;
      const deletedIndex = action.payload.index;
      const quoteIndex = state.quotes.findIndex(
        (q) => q.id === action.payload.id
      );

      const commentIndex = state.comments.findIndex(
        (com) => com.id === deletedId
      );
      state.comments[commentIndex].comments = state.comments[
        commentIndex
      ].comments.filter((coment, index) => index !== deletedIndex);

      //updating commentsAmount in quote array
      state.quotes[quoteIndex].commentsAmount =
        state.comments[commentIndex].comments.length;
    },
    editComment(state, action) {
      state.commentsChanged = true;
      const editedQuoteId = action.payload.id;
      const editedCommentIndex = action.payload.index;
      const newComment = action.payload.editedText;

      const commentIndex = state.comments.findIndex(
        (com) => com.id === editedQuoteId
      );

      state.comments[commentIndex].comments[editedCommentIndex].text =
        newComment;
    },
  },
});

export const quotesActions = quotesSlice.actions;

export default quotesSlice;
