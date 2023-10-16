import styles from './page.module.css';
import Form from "@/components/Form/Form";

export default function CreatePage() {
  return (
    <section className="container py-5">
      <h2 className={styles.title}>Новая заметка</h2>
      <Form />
    </section>
  );
}
