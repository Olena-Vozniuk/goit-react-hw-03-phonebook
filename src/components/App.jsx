import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper, Notification } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  addContact = newContact => {
    this.checkAddedContacts(newContact.name) ? alert(`${newContact.name} is already in contacts.`) :
      this.setState(
      prevState => {
        return {
          contacts: [...prevState.contacts, newContact]
        };
      });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  };

  checkAddedContacts = (newName) => {
    return this.state.contacts.find(({ name }) => name === newName);
  };

  render() {
    const filtredContacts = this.getFiltredContacts();

    return (
    <Wrapper>
      <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
      
      <h2>Contacts</h2>
        {<Filter value={this.state.filter} onChange={this.changeFilter} />}
        {filtredContacts[0] && this.state.contacts[0] ? <ContactList items={filtredContacts} onDeleteContact={this.deleteContact} /> : <Notification>It's so empty here... Come on, add someone!</Notification>}
      <GlobalStyle />
    </Wrapper>
  )};
};
