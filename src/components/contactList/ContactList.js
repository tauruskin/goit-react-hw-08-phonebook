import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { contactsSelector } from '../../redux/contacts';
import SingleContact from '../singleContact/SingleContact';
import './ContactList.css';

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className="contact_List">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} classNames="list_item" timeout={250}>
          <SingleContact id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
const mapStateToProps = state => ({
  contacts: contactsSelector.getFilteredContact(state),
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};
