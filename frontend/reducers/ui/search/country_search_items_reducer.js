import { RECEIVE_SEARCH_ITEMS } from '../../../actions/pg_search_actions';

const countrySearchItemsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ITEMS:
      return action.searchItemsPayload.countries;
    default:
      return state;
  }
};

export default countrySearchItemsReducer;
