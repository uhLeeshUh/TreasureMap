import { RECEIVE_COUNTRY } from "../../actions/country_actions";

const currentCountryDetailReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COUNTRY:
      return [action.countryPayload.country.id];
    default:
      return state;
  }
};

export default currentCountryDetailReducer;
