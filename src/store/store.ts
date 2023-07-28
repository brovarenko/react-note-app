import { configureStore } from '@reduxjs/toolkit';
import { reducer as notesReducer } from './notes/reducer';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
