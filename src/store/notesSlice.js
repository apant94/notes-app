import { createSlice } from "@reduxjs/toolkit";
import { fetchNotes, fetchNoteById } from "./thunk";

const initialState = {
  notes: [
    // { id: "111", title: "Заголовок", text: "Напишите свою 1-ю заметку" },
  ],
  selectedNote: [
    
  ],
};

export const notesSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setNote: (state, action) => {
      state.selectedNote.text = action.payload;
    },
    removeNote: (state, action) => {
      const id = action.payload;
      const notes = state.notes.filter((note) => note.id !== id);
      state.notes = notes;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.notes = action.payload;
    });
    builder.addCase(fetchNotes.rejected, (state, action) => {
      console.log(action.error)
      state.notes= initialState.notes;
    });
    builder.addCase(fetchNoteById.fulfilled, (state, action) => {
      state.selectedNote = action.payload
    });
    builder.addCase(fetchNoteById.rejected, (state, action) => {
      console.log(action.error)
      return action.error;
    });
  },
});

// actions
export const { setNote, removeNote } = notesSlice.actions;

// selectors
export const selectNotes = (state) => state.notes.notes;
export const selectedNote = (state) => state.notes.selectedNote;

export default notesSlice.reducer;
