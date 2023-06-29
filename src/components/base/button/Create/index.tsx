import styles from './index.module.css'
import { PlusCircle } from '@phosphor-icons/react'

export function CreateButton() {
  return (
    <button 
    className={styles.button}>
      Criar
      <PlusCircle size={16} />
    </button>
  )
}