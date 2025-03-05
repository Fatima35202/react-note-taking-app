import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import notesReducer from './features/notesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: notesReducer,
  },
});

export default store;
