import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './ContactsSlice';
// import persistStore from 'redux-persist/es/persistStore';
// import { createAction, createReducer } from '@reduxjs/toolkit';
// import { persistedContactReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // persistedContactReducer,

    filter: filterReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
