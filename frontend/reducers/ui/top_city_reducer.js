import { RECEIVE_TOP_CITIES } from '../../actions/city_actions';
import { merge } from 'lodash';

const topCityReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOP_CITIES:
      return Object.keys(action.citiesPayload);
    default:
      return state;
  }
};

export default topCityReducer;
