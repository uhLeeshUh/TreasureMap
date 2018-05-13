import lastCreatedArticleReducer from './last_created_article_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  lastArticleId: lastCreatedArticleReducer
});
