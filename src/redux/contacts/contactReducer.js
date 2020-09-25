import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsAction from './contactAction';

const removeContact = (state, { payload }) =>
  state.filter(contact => contact.id !== payload);

const items = createReducer([], {
  [contactsAction.getContactsSuccess]: (_, { payload }) => payload,
  [contactsAction.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsAction.deleteContactSuccess]: removeContact,
});

const filter = createReducer('', {
  [contactsAction.handleFilter]: (state, { payload }) => (state = payload),
});

export default combineReducers({
  items,
  filter,
});
