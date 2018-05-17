import { RECEIVE_SEARCH_ITEMS } from '../../../actions/pg_search_actions';

const countrySearchItemsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ITEMS:
    if (action.searchItemsPayload.countries){
      return [action.searchItemsPayload.countries];
    } else {
      return [];
    }
    default:
      return state;
  }
};

export default countrySearchItemsReducer;
