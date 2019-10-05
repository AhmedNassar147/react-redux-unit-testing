import { GET_POSTS, GET_POSTS_FINISHED } from "../types";

export const getPosts = () => ({
  type: GET_POSTS
});

export const getPostsFinished = posts => ({
  type: GET_POSTS_FINISHED,
  posts
});
