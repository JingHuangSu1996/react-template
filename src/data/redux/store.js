import configureStore from './configureStore';
import { INIT_STATE } from './constants';

// SINGLE SOURCE OF TRUTH
const store = configureStore(INIT_STATE);

export default store;
