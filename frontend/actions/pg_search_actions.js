import * as PgSearchUtil from '../util/pg_search_api_util';

export const RECEIVE_SEARCH_ITEMS = "RECEIVE_SEARCH_ITEMS";

export const receiveSearchItems = (searchItemsPayload) => {
  return {
    type: RECEIVE_SEARCH_ITEMS,
    searchItemsPayload
  };
};

export const fetchSearchItems = (queryString) => {
  return (dispatch) => {
    return PgSearchUtil.fetchSearchItems(queryString).then(
      (searchItemsPayload) => dispatch(receiveSearchItems(searchItemsPayload))
    );
  };
};
