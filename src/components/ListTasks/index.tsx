import { useState } from 'react'
import styles from './index.module.css'
import { EmptyState } from '../EmptyState'
import { Task } from '../Task'

import { PlusCircle } from '@phosphor-icons/react'

interface Task {
  id: number
  title: string
  completed: boolean
}

export function ListTasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer 1.',
      completed: false,
    },
    {
      id: 2,
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer 2.',
      completed: true,
    },
    {
      id: 3,
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer 3.',
      completed: true,
    },
  ])

  const countTasks = () => tasks.length

  const countTasksCompleted = () =>
    tasks.filter((task) => task.completed).length

  const handleCreateTask = (event: any) => {
    event.preventDefault()

    const newTask = {
      id: Math.random(),
      title: event.target.inputTask.value,
      completed: false,
    }

    setTasks([...tasks, newTask])

    event.target.inputTask.value = ''
  }

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleCompleteTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <>
      <form className={styles.createTask} onSubmit={handleCreateTask}>
        <input
          type="text"
          name="inputTask"
          placeholder="Adicione uma nova tarefa"
        />
        <button>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>

      <div className={styles.tasks}>
        <header>
          <div>
            <span className={styles.createdTasks}>Tarefas criadas</span>
            <span className={styles.counter}>{countTasks()}</span>
          </div>

          <div>
            <span className={styles.completedTasks}>Concluídas</span>
            <span className={styles.counter}>
              {`${countTasksCompleted()} de ${countTasks()}`}
            </span>
          </div>
        </header>

        <main>
          {countTasks() === 0 ? (
            <EmptyState />
          ) : (
            <div>
              {tasks.map((task, index) => (
                <Task
                  key={index}
                  {...task}
                  onDelete={handleDeleteTask}
                  onCompleted={handleCompleteTask}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  )
}
