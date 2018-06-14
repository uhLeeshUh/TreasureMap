import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import articleErrorsReducer from "./article_errors_reducer";
import imageErrorsReducer from "./errors/image_errors_reducer";

export default combineReducers({
  session: sessionErrorsReducer,
  article: articleErrorsReducer,
  image: imageErrorsReducer
});
