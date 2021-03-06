import {Injectable} from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoListService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  constructor() {
    const persistedTodos = JSON.parse(localStorage.getItem('@angular-todos') || '[]');
    this.todos = persistedTodos;
  }

  /**
   * Simulate POST /todos
   * @param todo a new Todo item
   * @returns Todo
   */
  addTodo(todo: Todo): TodoListService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    this.updateStore();
    return this;
  }

  remove(todo: Todo) {
    this.deleteTodoById(todo.id);
  }

  /**
   * Simulate DELETE /todos/:id
   * @param id id of a todo item
   */
  deleteTodoById(id: number): TodoListService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    this.updateStore();
    return this;
  }

  /**
   *  Simulate PUT /todos/:id
   *  @param id id of todo item
   *  @param values is the values of the todo being updated
   *  @returns updated Todo
   */
  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    this.updateStore();
    return todo;
  }

  /**
   * Simulate GET /todos
   * @returns array of Todos
   */
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  /**
   * Toggle todo complete
   * @param todo updates value of complete value
   * @returns updated Todo 
   */
  toggleTodoComplete(todo: Todo): Todo {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    this.updateStore();
    return updatedTodo;
  }

  getComplete() {
    return this.todos.filter((todo: Todo) => todo.complete === true);
  }

  removeComplete() {
    this.todos = this.todos.filter((todo: Todo) => todo.complete === false);
    this.updateStore();
  }

  private updateStore() {
    this.todos.forEach(t => t.editing = false);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
