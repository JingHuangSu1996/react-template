import createReducers from '../createReducers';

function injectReducerFactory(store) {
  return function injectReducer(key, reducer) {
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    ) {
      return;
    }

    store.injectedReducers[key] = reducer;
    store.replaceReducer(createReducers(store.injectedReducers));
  };
}

function getInjectors(store) {
  return {
    injectReducer: injectReducerFactory(store),
  };
}

export default getInjectors;
