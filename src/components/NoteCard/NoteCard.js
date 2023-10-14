import styles from "./notecard.module.css";

export default function NoteCard() {
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title flex-grow-0 flex-shrink-0">Заголовок</h5>
          <p
            className={`card-text flex-grow-1 flex-shrink-1 ${styles.noteText}`}
          >
            РРандомный текст Рандомный текст Рандомный текст Рандомный
            текстРандомный текст Рандомный текст Рандомный текст Рандомный
            текстРандомный текст Рандомный текст Рандомный текст Рандомный
            текстРандомный текст Рандомный текст Рандомный текст Рандомный текст
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-primary">
                Редактировать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
