import { combineReducers } from "redux";
import postsReducer from "../../modules/postsReducer";

export default combineReducers({
  posts: postsReducer
});
