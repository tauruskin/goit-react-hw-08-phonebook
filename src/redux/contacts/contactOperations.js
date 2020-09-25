import axios from 'axios';

import contactsAction from './contactAction';

const getContacts = () => async dispatch => {
  dispatch(contactsAction.getContactsRequest());
  try {
    const result = await axios.get('/contacts');
    dispatch(contactsAction.getContactsSuccess(result.data));
  } catch (error) {
    dispatch(contactsAction.getContactsError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  dispatch(contactsAction.addContactRequest());
  try {
    const result = await axios.post('/contacts', {
      name,
      number,
    });
    dispatch(contactsAction.addContactSuccess(result.data));
  } catch (error) {
    dispatch(contactsAction.addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(contactsAction.deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(contactsAction.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsAction.deleteContactError(error));
  }
};

export default {
  getContacts,
  addContact,
  deleteContact,
};
