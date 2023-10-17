'use client'
import NoteCard from "../NoteCard/NoteCard";
import { useSelector } from "react-redux";
import { selectFilteredNotes } from "@/store/notesSlice";

export default function NoteList({ mockNotes }) {
  const filteredNotes = useSelector(selectFilteredNotes); // массив отффильтрованных заметок

  return (
    <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 p-0">
      {!filteredNotes
        ? [...mockNotes]
            .reverse()
            .map((note) => (
              <NoteCard
                key={note.id}
                text={note.text}
                title={note.title}
                id={note.id}
              />
            ))
        : [...filteredNotes]
            .reverse()
            .map((note) => (
              <NoteCard
                key={note.id}
                text={note.text}
                title={note.title}
                id={note.id}
              />
            ))}
    </ul>
  );
}
