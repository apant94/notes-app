import styles from "./form.module.css";

export default function Form() {
  return (
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
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
