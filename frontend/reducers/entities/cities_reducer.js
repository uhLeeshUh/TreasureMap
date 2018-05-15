import { RECEIVE_CITIES, RECEIVE_CITY } from '../../actions/city_actions';
import { merge } from 'lodash';

const citiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CITIES:
      let newState = merge({}, state, action.citiesPayload.cities);
      return newState;
    case RECEIVE_CITY:
      let updatedCity = action.cityPayload.city;
      if (action.cityPayload.articles){
        updatedCity.article_ids = Object.keys(action.cityPayload.articles);
      }
      newState = merge({}, state, {[action.cityPayload.city.id]: updatedCity});
      return newState;
    default:
      return state;
  }
};

export default citiesReducer;
