import lastCreatedArticleReducer from './last_created_article_reducer';
import countryDetailLoadedReducer from './ui/country_detail_loaded_reducer';
import currentCountryDetailReducer from './ui/current_country_detail_reducer';
import topCountryReducer from './ui/top_country_reducer';
import topCityReducer from './ui/top_city_reducer';
import randomArticleReducer from './ui/random_article_reducer';

import { combineReducers } from 'redux';

export default combineReducers({
  lastArticleId: lastCreatedArticleReducer,
  countryDetailLoaded: countryDetailLoadedReducer,
  currentCountryDetailId: currentCountryDetailReducer,
  topCountryIds: topCountryReducer,
  topCityIds: topCityReducer,
  randomArticleId: randomArticleReducer
});
