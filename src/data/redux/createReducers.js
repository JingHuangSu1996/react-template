import { combineReducers } from 'redux';

const defaultReducer = (state = {}) => state;

const createReducers = (injectedReducers = { defaultReducer }) =>
  combineReducers({ ...injectedReducers });

export default createReducers;
