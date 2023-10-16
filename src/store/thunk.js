import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNotes } from '@/app/api/notesApi';

export const fetchNotes = createAsyncThunk(
  'notes/fetch',
  async () => {
    const notes = await getNotes();
    return notes;
  }
);