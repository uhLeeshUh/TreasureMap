import articleSearchItemsReducer from './article_search_items_reducer';
import citySearchItemsReducer from './city_search_items_reducer';
import countrySearchItemsReducer from './country_search_items_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  articleSearchItems: articleSearchItemsReducer,
  citySearchItems: citySearchItemsReducer,
  countrySearchItems: countrySearchItemsReducer
});
