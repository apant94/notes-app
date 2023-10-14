import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [{ id: "1", title: "Изначальная заметка", text: "Изначальная заметка" }],
};

export const notesSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const note = action.payload;
      state.notes.push(note);
    },
    removeNote: (state, action) => {
      const id = action.payload;
      const notes = state.notes.filter((note) => note.id !== id);
      state.notes = notes;
    },
  },
});

// actions
export const { addNote, removeNote } = notesSlice.actions;

// selectors
export const selectNotes = (state) => state.notes.notes;

export default notesSlice.reducer;