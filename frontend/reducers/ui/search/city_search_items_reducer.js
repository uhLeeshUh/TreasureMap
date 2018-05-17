import { RECEIVE_SEARCH_ITEMS } from '../../../actions/pg_search_actions';

const citySearchItemsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ITEMS:
    if(action.searchItemsPayload.cities){
      return [action.searchItemsPayload.cities];
    } else {
      return [];
    }
    default:
      return state;
  }
};

export default citySearchItemsReducer;
