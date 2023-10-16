import styles from './footer.module.css';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <nav className="navbar fixed-bottom navbar-expand-lg bg-white border-top border-primary">
        <div className="container-fluid">
          <Link className={`navbar-brand ${styles.link}`} href="/">
            ЗАМЕТКИ
          </Link>
          <p className="w-auto m-0">Анна Пантелеева 2023</p>
        </div>
      </nav>
    </footer>
  );
}
