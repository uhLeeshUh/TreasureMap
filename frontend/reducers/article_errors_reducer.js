import {
  RECEIVE_ARTICLE_ERRORS,
  CLEAR_ARTICLE_ERRORS
} from "../actions/article_actions";
import { RECEIVE_COUNTRY_ERRORS } from "../actions/country_actions";
import { RECEIVE_CITY_ERRORS } from "../actions/city_actions";

const articleErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLE_ERRORS:
      let newState = state.slice();
      // return action.errors.responseJSON || [];
      return newState.concat(action.errors.responseJSON);
    case RECEIVE_COUNTRY_ERRORS:
    case RECEIVE_CITY_ERRORS:
      newState = state.slice();
      return newState.concat(["Please enter a valid address for the place"]);
    case CLEAR_ARTICLE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default articleErrorsReducer;
