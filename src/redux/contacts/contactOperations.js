import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contactAction';

// axios.defaults.baseURL = 'http://localhost:2000';

export const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    const result = await axios.get(
      `https://phonebook-41d67.firebaseio.com/phonebook.json`,
    );
    dispatch(getContactsSuccess(result.data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const addContact = (name, number) => async dispatch => {
  dispatch(addContactRequest());
  try {
    const result = await axios.post(
      `https://phonebook-41d67.firebaseio.com/phonebook.json`,
      {
        name,
        number,
      },
    );
    dispatch(addContactSuccess(result.data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(
      `https://phonebook-41d67.firebaseio.com/phonebook/${id}.json`,
    );
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
