import { quotesActions } from "../store/quote-slice";

export const fetchQuotes = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://quotes-573dd-default-rtdb.firebaseio.com/quotes.json"
      );

      if (!response.ok) {
        throw new Error("fetch cart data faild");
      }

      const fetchedData = await response.json();
      return fetchedData;
    };
    try {
      dispatch(quotesActions.quotesAreLoading());
      const quotesData = await fetchData();
      dispatch(
        quotesActions.replaceQuotes({
          quotes: quotesData || [],
        })
      );
      dispatch(quotesActions.quotesAreDownload());
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendQuotesData = (quotes) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://quotes-573dd-default-rtdb.firebaseio.com/quotes.json",
        {
          method: "PUT",
          body: JSON.stringify({
            ...quotes,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("send quotes data faild");
      }
    };

    try {
      await sendRequest();
    } catch (error) {}
  };
};

// export const sendQuote = (quote) => {
//   return async (dispatch) => {
//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://quotes-573dd-default-rtdb.firebaseio.com/quotes.json",
//         {
//           method: "POST",
//           body: JSON.stringify({
//             quotes: quote,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("send quotes data faild");
//       }
//     };

//     try {
//       await sendRequest();
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
