import store from './store';

import * as ROOT from '../../App/action';

// PROVIDER
const actions = { ...ROOT };

const redux = {};

for (let [f, k] of Object.entries(actions)) {
  redux[f] = (...args) => store.dispatch(k(args));
}

export default redux;
