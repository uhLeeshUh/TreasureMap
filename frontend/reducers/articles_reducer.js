import { RECEIVE_ARTICLES, RECEIVE_ARTICLE, REMOVE_ARTICLE } from '../actions/article_actions';
import { merge } from 'lodash';

const articlesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLES:
      let newState = merge({}, state, action.articles);
      return newState;
    case RECEIVE_ARTICLE:
      newState = merge({}, state, {[action.article.id]: action.article});
      return newState;
    case REMOVE_ARTICLE:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default articlesReducer;
