import { RECEIVE_COUNTRY, CHANGE_COUNTRY_DETAIL_LOADED } from '../../actions/country_actions';

const countryDetailLoadedReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COUNTRY:
      return true;
    case CHANGE_COUNTRY_DETAIL_LOADED:
      return action.boolean;
    default:
      return state;
  }
};

export default countryDetailLoadedReducer;
