import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const ContactListItem = ({ contact: { id, name, number }, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(id);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
      <td>
        <button
          className="delete-button"
          onClick={handleDelete}
          title={`Delete ${name}`}
        >
          <FaTimes />
        </button>
      </td>
    </tr>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
