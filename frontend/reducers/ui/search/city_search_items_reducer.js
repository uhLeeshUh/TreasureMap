import { RECEIVE_SEARCH_ITEMS, UPDATE_SEARCH_STATUS } from '../../../actions/pg_search_actions';

const citySearchItemsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ITEMS:
    if(action.searchItemsPayload.cities){
      return action.searchItemsPayload.cities;
    } else {
      return [];
    }
    case UPDATE_SEARCH_STATUS:
      return [];
    default:
      return state;
  }
};

export default citySearchItemsReducer;
