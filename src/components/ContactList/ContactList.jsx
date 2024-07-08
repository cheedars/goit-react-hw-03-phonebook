import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = ({ filterContact, deleteContact }) => {
  const filteredContacts = filterContact();
  return (
    <table className={styles.table}>
      <thead>
          <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Action</th>
          </tr>
      </thead>
      <tbody>
        {filteredContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </tbody>
    </table>
  );
};

ContactList.propTypes = {
  filterContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
