import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import authAction from './authAction';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authAction.registerSuccess]: (_, { payload }) => payload.user,
  [authAction.loginSuccess]: (_, { payload }) => payload.user,
  [authAction.logoutSuccess]: () => initialUserState,
  [authAction.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authAction.registerSuccess]: (_, { payload }) => payload.token,
  [authAction.loginSuccess]: (_, { payload }) => payload.token,
  [authAction.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authAction.registerError]: (_, { payload }) => payload,
  [authAction.loginError]: (_, { payload }) => payload,
  [authAction.logoutError]: (_, { payload }) => payload,
  [authAction.getCurrentUserError]: (_, { payload }) => payload,
});

export const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

export default combineReducers({
  user,
  token,
  error,
});
