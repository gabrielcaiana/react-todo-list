import { PlusCircle } from '@phosphor-icons/react'
import styles from './index.module.css'

export function CreateTask() {
  return (
    <form className={styles.createTask}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button>
        Criar
        <PlusCircle size={16} />
    </button>
    </form>
  )
}