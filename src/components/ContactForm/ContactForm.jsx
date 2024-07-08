import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handleNumberChange = event => {
    this.setState({
      number: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { addContact, contacts } = this.props;

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
      
    if (existingContact) {
      Notify.failure(`${name} is already in your contacts!`, { position: 'center-top' });  
        return;
    }

    addContact({
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.formField}>
          <label className={styles.formLabel}>Name</label>          
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            value={name}
            onChange={this.handleNameChange}
            className={styles.formInput}
            required
          />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            placeholder='765-43-21'
            onChange={this.handleNumberChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formField}>          
          <button className={styles.formSubmit} type="submit">
            Add Contact
          </button>
        </div>
      </form>
    );
  }
}