import { GET_POSTS, GET_POSTS_FINISHED } from "../types";
import postsReducer from "./index";

describe("Post Reducer Tests", () => {
  it("should return default state if no case detected", () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual({
      loading: false,
      noData: false,
      posts: []
    });
  });

  it("should loading", () => {
    const newState = postsReducer(undefined, { type: GET_POSTS });
    expect(newState).toEqual({
      loading: true,
      noData: false,
      posts: []
    });
  });

  it("should not load while getting posts finished", () => {
    const posts = [
      {
        userId: 1,
        id: 1,
        title: "title 1 for test",
        body: "body 1 for test"
      },
      {
        userId: 2,
        id: 2,
        title: "title 2 for test",
        body: "body 2 for test"
      }
    ];

    const newState = postsReducer(undefined, {
      type: GET_POSTS_FINISHED,
      posts: posts
    });

    expect(newState).toEqual({
      loading: false,
      noData: !posts || (posts && !posts.length),
      posts: posts
    });
  });
});
