import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';


import configureStore from './store/store'; //need to create this file
import App from './components/app'; //need to create this file

// import * as SessionAPIUtil from './util/session_api_util';
import * as SessionActions from './actions/session_actions';
import * as ArticleAPIUtil from './util/article_api_util';
import * as ArticleActions from './actions/article_actions';
import * as CityAPIUtil from './util/city_api_util';
import * as CityActions from './actions/city_actions';
import * as CountryAPIUtil from './util/country_api_util';
import * as CountryActions from './actions/country_actions';
import * as PgSearchAPIUtil from './util/pg_search_api_util';
import * as PgSearchActions from './actions/pg_search_actions';


const Root = ({ store }) => {
  return (
    <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
};

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser){
    const preLoadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id}
    };
    store = configureStore(preLoadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.dispatch = store.dispatch;
  window.getState = store.getState;
  //end of testing
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});

// TESTING
// window.login = SessionAPIUtil.login;
// window.logout = SessionAPIUtil.logout;
// window.signup = SessionAPIUtil.signup;
window.signup = SessionActions.signup;
window.login = SessionActions.login;
window.logout = SessionActions.logout;
window.fetchSearchItems = PgSearchActions.fetchSearchItems;
// window.fetchArticle = ArticleAPIUtil.fetchArticle;
// window.fetchArticles = ArticleAPIUtil.fetchArticles;
// window.createArticle = ArticleAPIUtil.createArticle;
// window.editArticle = ArticleAPIUtil.editArticle;
// window.deleteArticle = ArticleAPIUtil.deleteArticle;
// window.createArticle = ArticleActions.createArticle;
// window.fetchRandomArticle = ArticleActions.fetchRandomArticle;
// window.deleteArticle = ArticleActions.deleteArticle;
// window.fetchCity = CityAPIUtil.fetchCity;
// window.fetchTopCities = CityAPIUtil.fetchTopCities;
// window.createCity = CityAPIUtil.createCity;
// window.createCity = CityActions.createCity;
// window.fetchCountries = CountryAPIUtil.fetchCountries;
// window.fetchCountry = CountryAPIUtil.fetchCountry;
// window.fetchCountries = CountryActions.fetchCountries;
// window.fetchCountry = CountryActions.fetchCountry;
// window.createCountry = CountryAPIUtil.createCountry;
// window.createCountry = CountryActions.createCountry;
// window.fetchRandomArticles = ArticleAPIUtil.fetchRandomArticles;
window.fetchRandomArticles = ArticleActions.fetchRandomArticles;


// {name: "test", description: "test desc", long_description: 'long', body: 'hey', lat: 23.2, lng: 34.1, author_id: 1, city_id: 3}

// {id: 24, name: "testEDITED", description: "test desc", long_description: 'long', body: 'hey', lat: 23.2, lng: 34.1, author_id: 1, city_id: 3}
