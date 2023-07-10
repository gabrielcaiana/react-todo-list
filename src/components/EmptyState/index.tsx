import styles from './index.module.css'
import { Clipboard } from '../Clipboard'

export function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <Clipboard />
      <h1 className={styles.title}>Você ainda não tem tarefas cadastradas</h1>
      <p className={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}
