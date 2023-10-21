import { Form } from './Form';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getContacts } from '../redux/ContactsSlice';
import { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';

// const { ContactList } = lazy(() => import('./ContactList/ContactList'));

export function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  console.log(items);
  useEffect(() => {
    dispatch(fetchContacts());
    console.log(dispatch);
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <>
        <Form />
        <h2>Contacts</h2>
        {<Filter />}
        {
          <div>
            {isLoading && <p>Loading contacts...</p>}
            {error && <p>{error}</p>}
            {items.length > 0 && <ContactList />}
          </div>
        }
      </>
    </div>
  );
}
