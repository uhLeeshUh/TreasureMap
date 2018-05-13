import { RECEIVE_ARTICLE } from '../actions/article_actions';

const lastCreatedArticleReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLE:
      return [action.articlePayload.article.id];
    default:
      return state;
  }
};
export default lastCreatedArticleReducer;
