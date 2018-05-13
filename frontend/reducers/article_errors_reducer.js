import { RECEIVE_ARTICLE_ERRORS, CLEAR_ARTICLE_ERRORS } from '../actions/article_actions';

const articleErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLE_ERRORS:
      return action.errors.responseJSON || [];
    case CLEAR_ARTICLE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default articleErrorsReducer;
