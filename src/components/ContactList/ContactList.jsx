import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, removeContact } from '../../redux/ContactsSlice';
import { getFilter } from '../../redux/filtersSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  
  const normalizedFilter = filters.toLowerCase();
  const getVisibleContacts = contacts.filter(({ name }) =>
  name.toLowerCase().includes(normalizedFilter)
);
  return(
  <ul className={styles.TaskList}>
    {getVisibleContacts.map((contact) => (
      <li className = {styles.TaskList_item}key={contact.id}>
        {contact.name + ":" + contact.number}
        {
          <button
            className={styles.TaskList_button}
            type="button"
            name="delte"
            onClick={() => dispatch(removeContact(contact.id))}
          >
            Delete
          </button>
        }
      </li>
    ))}
  </ul>
);
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}
export default ContactList;