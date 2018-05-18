import { UPDATE_SEARCH_STATUS } from '../../../actions/pg_search_actions';

const searchBarStatusReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_SEARCH_STATUS:
      return action.boolean;
    default:
      return state;
  }
};

export default searchBarStatusReducer;
