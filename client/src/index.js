import 'babel-core/polyfill';
import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from './store/configureStore';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import routes from './routes';

const history = createBrowserHistory();
const store = configureStore();
const container = document.getElementById('app-container');

React.render(
  <div>
    <Provider store={store}>
      {() =>
        <Router history={history}>
          {routes}
        </Router>
      }
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  container
);
