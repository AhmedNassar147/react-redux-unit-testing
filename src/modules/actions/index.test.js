import { GET_POSTS, GET_POSTS_FINISHED } from "../types";
import { getPosts, getPostsFinished } from "./index";

describe("post actions tests", () => {
  it("should create an action to fetch posts", () => {
    const expectedAction = {
      type: GET_POSTS
    };

    expect(getPosts()).toEqual(expectedAction);
  });

  it("should create an action to recieve posts", () => {
    const posts = [{ id: 1, title: "title" }];
    const expectedAction = {
      type: GET_POSTS_FINISHED,
      posts
    };

    expect(getPostsFinished(posts)).toEqual(expectedAction);
  });
});
