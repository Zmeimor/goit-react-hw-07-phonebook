import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  const contactsSlice = createSlice ({
    name:'conacts',
    initialState: contactsInitialState,
    reducers: {
     setContacts (state, action) {
        state.items = action.payload;
     },
     addContacts: {
        reducer(state, action) {
            state.items.push(action.payload);
        },
        prepare({ name, number }) {
            return {
                payload: {
                  id: nanoid(),
                  name,
                  number,
                },
            };
        },
    },
removeContact(state, action) {
    state.items = state.items.filter(
        contact => contact.id !== action.payload
        );
},
    },
  });
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter'],
  };

  export const persistedContactReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
  );
  
  export const getContacts = state => state.contacts.items;
  export const { setContacts, addContacts, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;