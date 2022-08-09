import { combineReducers } from "redux";
import modal from "./modal";
import posts from "./posts";

export default combineReducers({
  posts,
  modal,
});
