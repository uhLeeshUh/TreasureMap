import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';


import configureStore from './store/store'; //need to create this file
import App from './components/app'; //need to create this file

import * as SessionAPIUtil from './util/session_api_util';
import * as SessionActions from './actions/session_actions';

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
