import { RECEIVE_RANDOM_ARTICLE } from '../../actions/article_actions';

const randomArticleReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RANDOM_ARTICLE:
      return [action.articlePayload.article.id];
    default:
      return state;
  }
};

export default randomArticleReducer;
