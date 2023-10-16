"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";
import { getNotes } from "./api/notesApi";
import NoteCard from "@/components/NoteCard/NoteCard";
import Form from "@/components/Form/Form";
import { selectNotes, setNotes } from "@/store/notesSlice";
import { fetchNotes } from "@/store/thunk";

export default function Home() {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  // const getData = async () => {
  //   const result = await getNotes();
  //   dispatch(setNotes(result));
  // };

  useEffect(() => {
    // getData(); 
    dispatch(fetchNotes());
    console.log(notes);
  }, []);

  return (
    <section className="album py-5 bg-body-tertiary">
      <div className="container">
        <Link href="/create" className={styles.addLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={`bi bi-file-earmark-plus ${styles.addIcon}`}
            viewBox="0 0 16 16"
          >
            <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
          </svg>
          <p className={styles.addText}>Создать</p>
        </Link>
        <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 p-0">
          {notes.map((note, i) => (
            <NoteCard
              key={Number(note.id)}
              text={note.text}
              title={note.title}
              id={i}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
