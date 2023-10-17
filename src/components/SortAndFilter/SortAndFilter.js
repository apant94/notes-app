"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNotes,
  selectFilteredNotes,
  selectDescending,
  selectSearchQuery,
  setNotes,
  setFilteredNotes,
  setDescending,
  setSearchQuery,
} from "@/store/notesSlice";
import { fetchNotes } from "@/store/thunk";

export default function SortAndFilter() {
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
        onChange={(e) =>
          dispatch(setSearchQuery(e.target.value), filterInputs(e.target.value))
        }
      />
    </div>
  );
}
