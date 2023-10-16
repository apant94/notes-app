import Link from "next/link";
import styles from "./notecard.module.css";

export default function NoteCard({ id, title, text }) {
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
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
