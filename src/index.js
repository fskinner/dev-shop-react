import 'babel-core/polyfill';
import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';

const history = createBrowserHistory();
const store = configureStore();
const container = document.getElementById('app-container');

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history}>
        {routes}
      </Router>
    }
  </Provider>,
  container
);
