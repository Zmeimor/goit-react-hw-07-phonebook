import React from 'react';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {selectVisibleContacts} from '../../redux/selectors'
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={styles.TaskList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={styles.TaskList_item} key={id}>
          {/* <div>{isLoading && 'Request in progress...'}</div> */}
          <ContactItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};