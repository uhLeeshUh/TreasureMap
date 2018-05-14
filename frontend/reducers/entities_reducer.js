import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import articlesReducer from './articles_reducer';
import imagesReducer from './entities/images_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  articles: articlesReducer,
  images: imagesReducer,
});

export default entitiesReducer;
