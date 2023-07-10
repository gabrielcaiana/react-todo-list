import styles from './index.module.css'
import { Trash } from '@phosphor-icons/react'

interface TaskProps {
  title: string
  id: number
  completed: boolean
  onDelete: any
  onCompleted: any
}

export function Task({
  title,
  id,
  completed,
  onDelete,
  onCompleted,
}: TaskProps) {
  const handleDelete = () => {
    const eventData = id
    onDelete(eventData)
  }

  const handleCompleteTask = () => {
    const eventData = id
    onCompleted(eventData)
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkmark}>
        <input
          type="checkbox"
          id={`checkbox-task-${id}`}
          checked={completed}
          onChange={handleCompleteTask}
        />
        <label htmlFor={`checkbox-task-${id}`} />
      </div>

      <span className={completed ? styles.completed : ''}>{title}</span>
      <Trash size={24} className={styles.trash} onClick={handleDelete} />
    </div>
  )
}
