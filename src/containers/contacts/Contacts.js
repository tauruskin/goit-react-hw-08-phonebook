import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { contactsOperations, contactsSelector } from '../../redux/contacts';
import PhoneForm from '../../components/phoneForm/PhoneForm';
import ContactList from '../../components/contactList/ContactList';
import Filter from '../../components/filter/Filter';
import './Contacts.css';

class Contacts extends Component {
  state = {
    animation: false,
  };
  componentDidMount() {
    this.props.onGetContacts();
    this.setState(state => ({
      animation: !state.animation,
    }));
  }
  render() {
    return (
      <div className="container">
        <CSSTransition
          in={true}
          appear={true}
          classNames="title-slideIn"
          timeout={500}
          unmountOnExit
        >
          <h1 className="app_title">Phonebook</h1>
        </CSSTransition>

        <PhoneForm />

        {this.props.contacts.length === 0 && (
          <>
            <h2 className="contact_title">Contacts</h2>
            <p>Contacts list is empty. Please, create new cotnact!</p>
          </>
        )}

        <CSSTransition
          in={this.props.contacts.length > 1}
          classNames="filter_animation"
          timeout={250}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelector.itemsSelector(state),
});
const mapDispatchToProps = {
  onGetContacts: contactsOperations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
