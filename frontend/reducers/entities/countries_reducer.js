import { RECEIVE_COUNTRIES, RECEIVE_COUNTRY, RECEIVE_TOP_COUNTRIES } from '../../actions/country_actions';
import { RECEIVE_CITY } from '../../actions/city_actions';
import { RECEIVE_ARTICLE } from '../../actions/article_actions';
import { merge } from 'lodash';

const countriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COUNTRIES:
    case RECEIVE_TOP_COUNTRIES:
      let newState = merge({}, state, action.countriesPayload);
      return newState;
    case RECEIVE_COUNTRY:
      newState = merge({}, state, {[action.countryPayload.country.id]: action.countryPayload.country});
      return newState;
    case RECEIVE_CITY:
      newState = merge({}, state, {[action.cityPayload.country.id]: action.cityPayload.country});
      return newState;
    case RECEIVE_ARTICLE:
      newState = merge({}, state, {[action.articlePayload.country.id]: action.articlePayload.country});
      return newState;
    default:
      return state;
  }
};

export default countriesReducer;
