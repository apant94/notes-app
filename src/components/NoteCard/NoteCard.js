import styles from "./notecard.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { deleteNoteById } from "@/store/thunk";

export default function NoteCard({ id, title, text }) {
  const dispatch = useDispatch();
  const onDeleteClick = () => {
    dispatch(deleteNoteById(id));
  };

  return (
    <li className="col list-unstyled">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title flex-grow-0 flex-shrink-0">{title}</h5>
          <p
            className={`card-text flex-grow-1 flex-shrink-1 ${styles.noteText}`}
          >
            {text}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link href={`note/${id}`}>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                >
                  Читать
                </button>
              </Link>
              <button
                type="button"
                className={`btn d-flex align-items-center ${styles.icon}`}
                onClick={onDeleteClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="red"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
