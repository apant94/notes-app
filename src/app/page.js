import Link from "next/link";
// import Image from "next/image";
import styles from "./page.module.css";
import { getNotes } from "./api/notes";

export default function Home() {

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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-grow-0 flex-shrink-0">
                  Заголовок
                </h5>
                <p className="card-text flex-grow-1 flex-shrink-1">
                  Рандомный текст
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Редактировать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-grow-0 flex-shrink-0">
                  Заголовок
                </h5>
                <p className="card-text flex-grow-1 flex-shrink-1">
                  Рандомный текст Рандомный текст Рандомный текст Рандомный
                  текстРандомный текст Рандомный текст Рандомный текст Рандомный
                  текстРандомный текст Рандомный текст Рандомный текст Рандомный
                  текстРандомный текст Рандомный текст Рандомный текст Рандомный
                  текст
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Редактировать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-grow-0 flex-shrink-0">
                  Заголовок
                </h5>
                <p className="card-text flex-grow-1 flex-shrink-1">
                  Рандомный текст
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Редактировать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title flex-grow-0 flex-shrink-0">
                  Заголовок
                </h5>
                <p className="card-text flex-grow-1 flex-shrink-1">
                  Рандомный текст Рандомный текст Рандомный текст Рандомный
                  текстРандомный текст Рандомный текст Рандомный текст Рандомный
                  текстРандомный текст Рандомный текст Рандомный текст Рандомный
                  текстРандомный текст Рандомный текст Рандомный текст Рандомный
                  текст
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Редактировать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
