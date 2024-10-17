import Link from 'next/link';
import styles from './Header.module.css'; // Para estilos específicos do header

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/personal">Personal</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
