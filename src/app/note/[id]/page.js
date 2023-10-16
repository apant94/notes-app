"use client";

import styles from "./page.module.css";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditForm from "@/components/EditForm/EditForm";
import { fetchNoteById } from "@/store/thunk";
import { selectedNote } from "@/store/notesSlice";

export default function NotePage() {
  const params = useParams();
  const dispatch = useDispatch();
  const note = useSelector(selectedNote);
  const { id } = params;

  useEffect(() => {
    dispatch(fetchNoteById(id));
  }, [dispatch, id]);

  return (
    <section className="container py-5">
      <h2 className={styles.title}>{note.title}</h2>
      <EditForm note={note} />
    </section>
  );
}
