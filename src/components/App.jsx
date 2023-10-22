import { Form } from './Form';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectVisibleContacts, selectLoading, selectError } from '../redux/selectors';
import { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';

export function App() {
  const dispatch = useDispatch();
  const items = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectLoading);
  const  error = useSelector(selectError);

  console.log(items);
  useEffect(() => {
    dispatch(fetchContacts());
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
