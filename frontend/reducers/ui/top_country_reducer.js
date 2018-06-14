import { RECEIVE_TOP_COUNTRIES } from "../../actions/country_actions";
// import { merge } from 'lodash';

const topCountryReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOP_COUNTRIES:
      let newState = Object.keys(action.countriesPayload);
      return newState;
    default:
      return state;
  }
};

export default topCountryReducer;
