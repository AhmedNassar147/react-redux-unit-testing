import { put, takeLatest, all } from "redux-saga/effects";
import postsSaga, { getRequest, requestPosts } from "./index";
import { getPostsFinished } from "../actions";
import { GET_POSTS } from "../types";

// import { LOAD_REPOS } from 'containers/App/constants';
// import { reposLoaded, repoLoadingError } from 'containers/App/actions';

const posts = [{ id: 1, title: "title" }];

describe("getPosts Saga tests", () => {
  let getReposGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getReposGenerator = requestPosts();
    getReposGenerator.next();
    const callDescriptor = getReposGenerator.next(10).value;
    expect(callDescriptor).toEqual(getRequest(10));
  });

  it("should dispatch the getPostsFinished action if it requests the data successfully", () => {
    const putDescriptor = getReposGenerator.next(posts).value;
    expect(putDescriptor).toEqual(put(getPostsFinished(posts)));
  });

  it("should call getPostsFinished action with empty value if the response errors", () => {
    const response = new Error("Some error");
    const putDescriptor = getReposGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(getPostsFinished()));
  });
});

describe("main posts Saga", () => {
  const githubDataSaga = postsSaga();

  it("should start task to watch for GET_POSTS  action", () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      all([takeLatest(GET_POSTS, requestPosts)])
    );
  });
});
