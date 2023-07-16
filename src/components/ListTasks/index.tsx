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
  const storedTasks = window.localStorage.getItem('todo-tasks')
  const initialTasks: Task[] = storedTasks ? JSON.parse(storedTasks) : []

  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const countTasks = (): number => tasks.length

  const countTasksCompleted = (): number =>
    tasks.reduce((acc, task) => (task.completed ? ++acc : acc), 0)

  const handleCreateTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newTask: Task = {
      id: Math.random(),
      title: event.currentTarget.inputTask.value,
      completed: false,
    }

    setTasks([...tasks, newTask])

    window.localStorage.setItem(
      'todo-tasks',
      JSON.stringify([...tasks, newTask])
    )

    event.currentTarget.inputTask.value = ''
  }

  const handleDeleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)

    window.localStorage.setItem('todo-tasks', JSON.stringify(newTasks))
  }

  const handleCompleteTask = (id: number) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })

    setTasks(updateTasks)

    window.localStorage.setItem('todo-tasks', JSON.stringify(updateTasks))
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
