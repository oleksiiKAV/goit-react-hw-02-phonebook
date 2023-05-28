import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm, ContactList, Filter } from 'components';
import {
  TitleStyled,
  SubtitleStyled,
} from '../components/ContactForm/ContactForm.styled';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = contacts => {
    if (
      this.state.contacts.some(
        el => el.name.toLowerCase() === contacts.name.toLowerCase()
      )
    ) {
      return alert(`${contacts.name} is already in contacts.`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contacts, id: nanoid() }],
    }));
  };

  removeContacts = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  filterContacts = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  showContacts = () => {
    const { contacts, filter: condition } = this.state;
    if (condition === '') return contacts;
    return contacts.filter(el =>
      el.name.toLowerCase().includes(condition.toLowerCase())
    );
  };

  render() {
    const renderContacts = this.showContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <TitleStyled>Phonebook</TitleStyled>
        <ContactForm
          addContacts={this.addContacts}
          contacts={this.state.contacts}
        />
        <SubtitleStyled>Contacts</SubtitleStyled>
        <Filter
          filter={this.state.filter}
          filterContacts={this.filterContacts}
        />
        <ContactList
          contacts={renderContacts}
          removeContacts={this.removeContacts}
        />
      </div>
    );
  }
}
