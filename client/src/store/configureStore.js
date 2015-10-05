import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from '../middlewares/api';
import loggerMiddleware from 'redux-logger';
import { devTools, persistState } from 'redux-devtools';
import rootReducer from '../reducers';

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    apiMiddleware
  ),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
