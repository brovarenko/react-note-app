// features/notes/notesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Note, notesData } from './notes';

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: notesData,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const { id } = action.payload;
      const existingNote = state.notes.find((note) => note.id === id);
      if (existingNote) {
        Object.assign(existingNote, action.payload);
      }
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;
export const { reducer } = notesSlice;

export const selectNotes = (state: RootState) => state.notes.notes;
export const selectNoteById = (id: number) => (state: RootState) =>
  state.notes.notes.find((note) => note.id === id);
