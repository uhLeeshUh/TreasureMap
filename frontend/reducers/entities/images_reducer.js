import { RECEIVE_IMAGE, RECEIVE_IMAGES } from '../../actions/image_actions';
import { RECEIVE_ARTICLE, RECEIVE_RANDOM_ARTICLES } from '../../actions/article_actions';
import { RECEIVE_CITY } from '../../actions/city_actions';
import { RECEIVE_COUNTRY } from '../../actions/country_actions';
import { merge } from 'lodash';

const imagesReducer = (state = {} , action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_IMAGES:
      let newState = merge({}, state, action.images);
      return newState;

    case RECEIVE_RANDOM_ARTICLES:
      newState = merge({}, state, action.articlesPayload.images);
      return newState;

    case RECEIVE_IMAGE:
      newState = merge({}, state, {[action.image.id]: action.image});
      return newState;

    case RECEIVE_ARTICLE:
      newState = merge({}, state, action.articlePayload.images);
      return newState;

    case RECEIVE_CITY:
      newState = merge({}, state, action.cityPayload.images);
      return newState;

    case RECEIVE_COUNTRY:
      newState = merge({}, state, action.countryPayload.images);
      return newState;

    default:
      return state;
  }
};

export default imagesReducer;
