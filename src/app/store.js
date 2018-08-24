import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './ducks';

// Add Redux-Thunk
let middleware = applyMiddleware(thunk);

// Add Redux Devtools
if (__DEV__ && __CLIENT__ && typeof window.devToolsExtension === 'function') {
  middleware = compose(middleware, window.devToolsExtension());
}

const configureStore = (initialState) => {
  const store = createStore(
    appReducers,
    initialState,
    middleware,
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./ducks', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = combineReducers({ ...require('./ducks').default });
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
