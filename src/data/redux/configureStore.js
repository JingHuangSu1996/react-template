import { createStore, compose } from 'redux';
import createReducer from './createReducers';
import { INIT_STATE } from './constants';

function configureStore(initialState = INIT_STATE) {
  let composeEnhancers = compose;

  if (
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object'
  ) {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        {},
      );
  }

  const reducers = createReducer();

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(),
  );

  store.injectedReducers = {};

  if (module.hot) {
    module.hot.accept('./createReducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}

export default configureStore;
