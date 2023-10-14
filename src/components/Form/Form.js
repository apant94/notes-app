"use client";

import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ addNote }) {
  const [note, setNote] = useState("");

  const updateNote = (e) => {
    setNote(e.target.value);
  };

  const onAddNoteClick = () => {
    // addNote(note);
    setNote("");
  };

  return (
    <section>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Заголовок
          </label>
          <input type="text" className="form-control" id="title" />
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
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onAddNoteClick}
        >
          Создать
        </button>
      </form>
    </section>
  );
}
