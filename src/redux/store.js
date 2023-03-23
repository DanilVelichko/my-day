import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import transactionSlice from './transaction/transactionSlice'
import { authReducer } from './auth/authSlice';
import globalSlice from './global/globalSlice';
import categoriesSlice from './categories/categoriesSlice';
import summarySlice from './summary/summarySlice';
import { contactsSlice } from './contacts/sliceContacts';
import { filterSlice } from './filter/sliceFilter';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transactionSlice,
    global: globalSlice,
    categories: categoriesSlice,
    summary: summarySlice,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
