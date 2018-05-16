import { RECEIVE_COUNTRIES, RECEIVE_COUNTRY } from '../../actions/country_actions';
import { merge } from 'lodash';

const countriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COUNTRIES:
      let newState = merge({}, state, action.countriesPayload);
      return newState;
    case RECEIVE_COUNTRY:
      newState = merge({}, state, {[action.countryPayload.country.id]: action.countryPayload.country});
      return newState;
    default:
      return state;
  }
};

export default countriesReducer;
