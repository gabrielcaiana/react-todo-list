import { API_URL } from '../../../constants'
import { Todo } from '../../../types'
import { HttpClient } from '../../http'

export class TodoService extends HttpClient {
  constructor() {
    super(API_URL);
  }

  async getTodos(): Promise<Todo[]> {
    const response = await this.get('/todos');
    return response.data
  }

  async createTodo(
    title: string,
    completed: boolean = false
  ): Promise<Todo> {
    const response = await this.post('/todos', {
      title,
      completed
    });
    return response.data
  }

  async updateTodo(id: number, todo: Partial<Todo>): Promise<Todo> {
    const response = await this.put(`/todos/${id}`, todo);
    return response.data
  }

  async deleteTodoById(id: number): Promise<void> {
    await this.delete(`/todos/${id}`);
  }
}