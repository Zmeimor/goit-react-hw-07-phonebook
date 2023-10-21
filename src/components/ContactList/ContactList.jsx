import React from 'react';
import styles from './ContactList.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { getContacts } from '../../redux/ContactsSlice';
import { getFilter } from '../../redux/filtersSlice';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);
  const filters = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedFilter = filters.toLowerCase();
  const getVisibleContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <ul className={styles.TaskList}>
      {getVisibleContacts.map(({ id, name, number }) => (
        <li className={styles.TaskList_item} key={id}>
          {/* <div>{isLoading && 'Request in progress...'}</div> */}
          <ContactItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};