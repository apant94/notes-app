"use client";

import { useState } from "react";
import styles from "./form.module.css";
import { postNote } from "@/app/api/notesApi";

export default function Form({}) {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [isSent, setIsSent] = useState(false);

  const updateNote = (e) => {
    setNote(e.target.value);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const onAddNoteClick = (e) => {
    e.preventDefault();
    postNote({ title, text: note });
    setNote("");
    setTitle("");
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 1000);
  };

  return (
    <section>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Заголовок
          </label>
          <input
            value={title}
            onChange={updateTitle}
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="textarea" className="form-label">
            Заметка
          </label>
          <textarea
            className={`form-control ${styles.textarea}`}
            aria-label="note"
            id="textarea"
            value={note}
            onChange={updateNote}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onAddNoteClick}
          disabled={note.length === 0}
        >
          Создать
        </button>
      </form>

      {isSent && <p>Заметка отправлена</p>}
    </section>
  );
}
