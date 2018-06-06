import { RECEIVE_ARTICLES, RECEIVE_ARTICLE, REMOVE_ARTICLE, RECEIVE_RANDOM_ARTICLES } from '../actions/article_actions';
import { RECEIVE_CITY } from '../actions/city_actions';
import { RECEIVE_COUNTRY } from '../actions/country_actions';
import { merge } from 'lodash';

const articlesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLE:
      let newState = merge({}, state, {
        [action.articlePayload.article.id]: action.articlePayload.article
      });
      newState[action.articlePayload.article.id]["image_ids"] = action.articlePayload.article.image_ids;
      return newState;

    case RECEIVE_RANDOM_ARTICLES:
      newState = merge({}, state, action.articlesPayload.articles);
      return newState;

    case REMOVE_ARTICLE:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;

    case RECEIVE_CITY:
      newState = merge({}, state, action.cityPayload.articles);
      return newState;

    case RECEIVE_COUNTRY:
      newState = merge({}, state, action.countryPayload.articles);
      return newState;

    default:
      return state;
  }
};

export default articlesReducer;





//shouldn't need this because there is no articles#index action, city will pull up articles always
// case RECEIVE_ARTICLES:
// let newState = merge({}, state, action.articlesPayload.articles);
// return newState;
