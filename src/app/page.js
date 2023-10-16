"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";
import NoteCard from "@/components/NoteCard/NoteCard";
import { selectNotes } from "@/store/notesSlice";
import { fetchNotes } from "@/store/thunk";

export default function Home() {
  const initialNotes = useSelector(selectNotes); // изначальные заметки
  const [sortedNotes, setSortedNotes] = useState(); // массив отсортированных заметок
  const [filteredNotes, setFilteresNotes] = useState(); // массив отфильтрованных заметок
  const [renderedNotes, setRenderedNotes] = useState([]); // массив заметок для отрисовки после сортировки и фильтрации
  const [descending, setDescending] = useState(false); // стейт направления сортировки
  const [query, setQuery] = useState(""); // стейт данных поиска
  const dispatch = useDispatch();

  const onSortClick = () => {
    const sorted = query
      ? [...initialNotes]
          .filter((note) => {
            return (
              note.title.replace(/\s/g, "").toLowerCase().includes(query) ||
              note.text.replace(/\s/g, "").toLowerCase().includes(query)
            );
          })
          .sort((a, b) =>
            descending
              ? a.text.toLowerCase() < b.text.toLowerCase()
                ? 1
                : -1
              : a.text.toLowerCase() > b.text.toLowerCase()
              ? 1
              : -1
          )
      : [...initialNotes].sort((a, b) =>
          descending
            ? a.text.toLowerCase() < b.text.toLowerCase()
              ? 1
              : -1
            : a.text.toLowerCase() > b.text.toLowerCase()
            ? 1
            : -1
        );
    setDescending(!descending);
    setSortedNotes(sorted);
    setRenderedNotes(sorted);
  };

  const onSearchChange = (e) => {
    setQuery(e.target.value);
    const filtered = [...initialNotes].filter((note) => {
      return (
        note.title.replace(/\s/g, "").toLowerCase().includes(e.target.value) ||
        note.text.replace(/\s/g, "").toLowerCase().includes(e.target.value)
      );
    });
    setFilteresNotes(filtered);
    setRenderedNotes(filtered);
  };

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

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
        <div className="mb-3 d-flex gap-3">
          <button
            type="button"
            className="btn btn-dark d-flex align-items-center"
            onClick={onSortClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-down-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </button>
          <input
            type="text"
            className="form-control"
            value={query}
            placeholder="Поиск"
            onInput={onSearchChange}
          />
        </div>

        <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 p-0">
          {!sortedNotes && !filteredNotes
            ? initialNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  text={note.text}
                  title={note.title}
                  id={note.id}
                />
              ))
            : renderedNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  text={note.text}
                  title={note.title}
                  id={note.id}
                />
              ))}
        </ul>
      </div>
    </section>
  );
}
