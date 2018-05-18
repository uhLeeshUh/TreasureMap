import { RECEIVE_SEARCH_ITEMS } from '../../../actions/pg_search_actions';

const articleSearchItemsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ITEMS:
    if (action.searchItemsPayload.articles){
      return action.searchItemsPayload.articles;
    } else {
      return [];
    }
    default:
      return state;
  }
};

export default articleSearchItemsReducer;
