import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from "./app";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import instathingApp from '../reducers/instathing_app';

import PhotoIndex from "./photos/photo_index";
import PhotoDetail from "./photos/photo_detail";
import UserShow from "./users/user_show";
import Explore from "./explore";

const store = createStore(instathingApp);

// const history = syncHistoryWithStore(browserHistory, store);
const history = browserHistory;

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoIndex} />
          <Route path="explore" component={Explore} />
          <Route path="photo/:photoId" component={PhotoDetail}/>
          <Route path=":username" component={UserShow}>
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default routes;
