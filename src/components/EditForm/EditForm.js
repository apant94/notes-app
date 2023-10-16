"use client";

import { useDispatch } from "react-redux";
import styles from "./editform.module.css";
import { useState } from "react";
import { updateNote } from "@/app/api/notesApi";
import { setNote } from "@/store/notesSlice";


export default function EditForm({ note }) {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState("");

  const onUpdateNoteSubmit = (e) => {
    e.preventDefault();
    updateNote(note.id, newText);
    dispatch(setNote(newText));
  };

  return (
    <section className="container py-5">
      <p>{note.text}</p>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Редактировать
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Редактировать заметку
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <form onSubmit={onUpdateNoteSubmit}>
              <div className="modal-body">
                <textarea
                  className={styles.textarea}
                  value={newText || note.text}
                  onChange={(e) => {
                    setNewText(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Закрыть
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
