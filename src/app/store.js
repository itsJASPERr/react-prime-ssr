import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as appReducers from 'app/ducks';

const reducers = combineReducers({ ...appReducers });

const createStore = initialState => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = combineReducers({ ...require('app/ducks').default });
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default createStore;
