import { createSlice } from "@reduxjs/toolkit";
import { fetchNotes, fetchNoteById, deleteNoteById } from "./thunk";

const initialState = {
  notes: [],
  filteredNotes: [],
  selectedNote: [],
  descending: false,
  searchQuery: '',
};

export const notesSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setNote: (state, action) => {
      state.selectedNote.text = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setFilteredNotes: (state, action) => {
      if (action.payload.length < state.filteredNotes.length) {
        state.filteredNotes = action.payload;
      } else {
        state.filteredNotes = [...state.notes];
        state.filteredNotes = action.payload;
      }
    },
    setDescending: (state, action) => {
      state.descending = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.notes = action.payload;
      state.filteredNotes = action.payload;
    });
    builder.addCase(fetchNotes.rejected, (state, action) => {
      console.log(action.error);
      state.notes = initialState.notes;
    });
    builder.addCase(fetchNoteById.fulfilled, (state, action) => {
      state.selectedNote = action.payload;
    });
    builder.addCase(fetchNoteById.rejected, (state, action) => {
      console.log(action.error);
      return action.error;
    });
    builder.addCase(deleteNoteById.fulfilled, (state, action) => {
      const id = action.payload.id;
      const notes = state.filteredNotes.filter((note) => note.id !== id);
      state.notes = notes;
      state.filteredNotes = notes;
    });
    builder.addCase(deleteNoteById.rejected, (state, action) => {
      console.log(action.error);
      return action.error;
    });
  },
});

// actions
export const { setNote, setNotes, setFilteredNotes, setDescending, setSearchQuery } = notesSlice.actions;

// selectors
export const selectNotes = (state) => state.notes.notes;
export const selectedNote = (state) => state.notes.selectedNote;
export const selectFilteredNotes = (state) => state.notes.filteredNotes;
export const selectDescending = (state) => state.notes.descending;
export const selectSearchQuery = (state) => state.notes.searchQuery;



export default notesSlice.reducer;
