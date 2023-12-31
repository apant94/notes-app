import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNotes, getNoteById, deleteNote } from '@/app/api/notesApi';

export const fetchNotes = createAsyncThunk(
  'notes/fetch',
  async () => {
    const notes = await getNotes();
    return notes;
  }
);

export const fetchNoteById = createAsyncThunk(
  'note/fetch',
  async (id) => {
    const note = await getNoteById(id);
    return note;
  }
);

export const deleteNoteById = createAsyncThunk(
  'note/delete',
  async (id) => {
    const note = await deleteNote(id);
    return note;
  }
);