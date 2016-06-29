import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from "./app";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import HomePage from "./home_page";
import PhotoDetail from "./photos/photo_detail";
import UserShow from "./users/user_show";
import Explore from "./explore";

import store from '../store/store.js';

// const history = syncHistoryWithStore(browserHistory, store);
const history = browserHistory;
const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="explore" component={Explore} />
        <Route path=":username" component={UserShow}>
          <Route path="photos/:photoId" component={PhotoDetail}/>
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default routes;
