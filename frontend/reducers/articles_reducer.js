import { RECEIVE_ARTICLES, RECEIVE_ARTICLE, REMOVE_ARTICLE } from '../actions/article_actions';
import { merge } from 'lodash';

const articlesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLES:
      let newState = merge({}, state, action.articlesPayload.articles);
      return newState;
    case RECEIVE_ARTICLE:
      let appendedArticle = action.articlePayload.article;

      appendedArticle.editing_user_ids = Object.keys(action.articlePayload.editors);

      newState = merge({}, state, {
        [action.articlePayload.article.id]: appendedArticle
      });
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
