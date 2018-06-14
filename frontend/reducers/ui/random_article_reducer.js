import { RECEIVE_RANDOM_ARTICLES } from "../../actions/article_actions";

const randomArticleReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RANDOM_ARTICLES:
      return Object.keys(action.articlesPayload.articles);
    default:
      return state;
  }
};

export default randomArticleReducer;
