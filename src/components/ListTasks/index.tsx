import { useEffect, useState } from 'react'
import styles from './index.module.css'
import { EmptyState } from '../EmptyState'
import { Task } from '../Task'

import { PlusCircle } from '@phosphor-icons/react'
import { Todo } from '../../types'
import { TodoService } from '../../services/api/todo'

export function ListTasks() {
  const todoService = new TodoService()

  const [todos, setTodos] = useState<Todo[]>([])

  const countTasks = (): number => todos.length

  const countTasksCompleted = (): number =>
    todos.reduce((acc, task) => (task.completed ? ++acc : acc), 0)

  const handleCreateTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const input = event.currentTarget.inputTask

    const newTodo = {
      title: input.value,
      completed: false,
    }

    try {
      await todoService.createTodo(newTodo.title, newTodo.completed);
      await fetchData();

      input.value = '';
    } catch (e) {
      console.error(e);
    }
  }

  const handleDeleteTask = async (id: number) => {
    try {
      await todoService.deleteTodoById(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (e) {
      console.error(e);
    }
  }

  const handleCompleteTask = async (id: number) => {
    try {
      const todo = todos.find(todo => todo.id === id);

      if(todo) {
        await todoService.updateTodo(id, { completed: !todo.completed });
        await fetchData()
      }
    } catch (e) {
      console.error(e);
    }
  }

  const fetchData = async () => {
    try {
      const result = await todoService.getTodos();
      setTodos(result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              {todos.map(todo => (
                <Task
                  key={todo.id}
                  {...todo}
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
