import { Logo } from "../Logo";
import styles from './index.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  )
}