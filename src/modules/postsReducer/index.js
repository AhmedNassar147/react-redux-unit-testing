import { GET_POSTS, GET_POSTS_FINISHED } from "../types";

const initialState = {
  loading: false,
  noData: false,
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: true
      };

    case GET_POSTS_FINISHED:
      return {
        ...state,
        loading: false,
        noData: !action.posts || (action.posts && !action.posts.length),
        posts: action.posts
      };

    default:
      return state;
  }
};
