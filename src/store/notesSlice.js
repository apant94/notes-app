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
    setNotes: (state, action) => {
      const fetchedNotes = action.payload;
      state.notes = fetchedNotes;
    },
    // addNote: (state, action) => {
    //   const note = action.payload;
    //   state.notes.push(note);
    // },
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
      // return action.payload;
    });
    builder.addCase(fetchNoteById.rejected, (state, action) => {
      console.log(action.error)
      return action.error;
    });
  },
});

// actions
export const { setNotes, removeNote } = notesSlice.actions;

// selectors
export const selectNotes = (state) => state.notes.notes;
export const selectedNote = (state) => state.notes.selectedNote;

export default notesSlice.reducer;
