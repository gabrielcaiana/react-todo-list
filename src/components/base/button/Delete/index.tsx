import { Trash } from '@phosphor-icons/react'
import styles from './index.module.css'

export function ButtonDelete() {
  return (
    <button 
      className={styles.button}>
        <Trash size={16} />
      </button>
  )
}