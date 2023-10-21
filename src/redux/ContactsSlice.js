import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { fetchContacts, addContact, deleteContact } from './operations';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialStateItem = fetchContacts();
console.log(contactsInitialStateItem);

// const contactsInitialState =

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      console.log(state.items);
    },
    // setContacts(state, action) {
    //   state.items = action.payload;
    // },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
  },

  // removeContact(state, action) {
  //   // console.log(state[1]);
  // state.items = state.items.filter(
  //   contact => contact.id !== action.payload
  // );
  // },
  [deleteContact.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(item => item.id === action.payload.id);
    state.items.splice(index, 1);
  },
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

// export const persistedContactReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
export const getContacts = state => state.contacts;
// export const getError = state => state.contacts.error;

export const selectLoading = state => state.tasks.loading;
// Экспортируем генераторы экшенов и редюсер
// export const { setContacts, addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = ContactsSlice.reducer;
