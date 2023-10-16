import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./notesSlice";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});