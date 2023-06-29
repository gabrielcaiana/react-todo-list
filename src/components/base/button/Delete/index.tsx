import { Trash } from '@phosphor-icons/react'
import styles from './index.module.css'

export function DeleteButton() {
  return (
    <button 
      className={styles.button}>
        <Trash size={16} />
      </button>
  )
}