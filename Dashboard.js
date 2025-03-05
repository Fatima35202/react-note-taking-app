import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => { state.push(action.payload); },
    removeNote: (state, action) => state.filter(note => note.id !== action.payload),
  },
});

export const { addNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
