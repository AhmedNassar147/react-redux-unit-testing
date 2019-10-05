import { all, takeLatest, put, select } from "redux-saga/effects";
import { GET_POSTS } from "./types";
import { getPostsFinished } from "./actions";

const getRequest = async limit => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?limit=${limit}`
  );
  response = await response.json();
  return response;
};

const postsSelector = ({ posts }) => posts;

function* requestPosts() {
  try {
    const { posts } = select(postsSelector);
    const limit = posts && posts.length ? posts.length + 10 : 10;
    const newPosts = yield getRequest(limit);
    yield put(getPostsFinished(newPosts || []));
  } catch (error) {
    yield put(getPostsFinished());
  }
}

export default function* postsSaga() {
  yield all([takeLatest(GET_POSTS, requestPosts)]);
}
