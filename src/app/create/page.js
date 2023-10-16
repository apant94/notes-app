import styles from './page.module.css';
import CreateForm from "@/components/CreateForm/CreateForm";

export default function CreatePage() {
  return (
    <section className="container py-5">
      <h2 className={styles.title}>Новая заметка</h2>
      <CreateForm />
    </section>
  );
}
