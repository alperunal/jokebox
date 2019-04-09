import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = preloadedState => {
  const middlewares = [thunk];
  const composed = [applyMiddleware(...middlewares)];

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-underscore-dangle
    composed.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(rootReducer, preloadedState, compose(...composed));

  return store;
};

export default configureStore;
