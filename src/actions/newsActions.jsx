import { FETCH_NEWS, RESET_NEWS } from "actions/types";

export const fetchNews = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(news => dispatch({ type: FETCH_NEWS, payload: news }));
};

export const resetNews = () => {
  return dispatch => {
    dispatch({ type: RESET_NEWS, payload: [] });
  };
};
//
// export const resetNews = dispatch => {
//   setTimeout(() => {
//     dispatch({ type: RESET_NEWS, payload: [] });
//   }, 4000);
// };
