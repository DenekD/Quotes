import { quotesActions } from "../store/quote-slice";

export const fetchComments = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://quotes-573dd-default-rtdb.firebaseio.com/comments.json"
      );

      if (!response.ok) {
        throw new Error("fetch cart data faild");
      }

      const fetchedData = await response.json();
      return fetchedData;
    };
    try {
      const commentsData = await fetchData();
      await dispatch(
        quotesActions.replaceComments({
          comments: commentsData || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCommentsData = (comments) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://quotes-573dd-default-rtdb.firebaseio.com/comments.json",
        {
          method: "PUT",
          body: JSON.stringify({
            ...comments,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("send quotes data faild");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      // dispatch(
      //   quotesActions.showNotification({
      //     message: "sending cart data faild",
      //     title: "error",
      //     status: "error",
      //   })
      // );
    }
  };
};
