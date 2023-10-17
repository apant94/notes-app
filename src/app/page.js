"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";
import NoteList from "@/components/NotesList/NotesList";
import {
  selectNotes,
  selectFilteredNotes,
  selectDescending,
  selectSearchQuery,
  setFilteredNotes,
  setDescending,
  setSearchQuery,
} from "@/store/notesSlice";
import { fetchNotes } from "@/store/thunk";

export default function Home({}) {
  const initialNotes = useSelector(selectNotes); // изначальные заметки из стора
  const filteredNotes = useSelector(selectFilteredNotes); // массив отффильтрованных заметок
  const descending = useSelector(selectDescending); // стейт направления сортировки
  const query = useSelector(selectSearchQuery); // стейт направления сортировки

  const dispatch = useDispatch();
  const onSortClick = () => {
    const sorted = filteredNotes
      ? [...filteredNotes]
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
    dispatch(setDescending(!descending));
    dispatch(setFilteredNotes(sorted));
  };

  const filterInputs = (data) => {
    const filtered = [...initialNotes].filter((note) => {
      return (
        note.title.replace(/\s/g, "").toLowerCase().includes(data) ||
        note.text.replace(/\s/g, "").toLowerCase().includes(data)
      );
    });
    dispatch(setFilteredNotes(filtered));
  };

  useEffect(() => {
    void dispatch(fetchNotes());
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
            onChange={(e) => dispatch(setSearchQuery(e.target.value), filterInputs(e.target.value))}
          />
        </div>
        <NoteList filteredNotes={filteredNotes} />
      </div>
    </section>
  );
}
