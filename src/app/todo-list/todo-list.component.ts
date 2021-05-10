import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoListService) {
  }
  ngOnInit(): void {
   
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  getCompleteCount() {
    return this.todoDataService.getComplete().length;
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  removeComplete() {
    this.todoDataService.removeComplete();
  }

  stopEditing(todo: Todo, editedTitle: string) {
  todo.title = editedTitle;
  todo.editing = false;
    this.todoDataService.updateTodoById(todo.id, todo);
  }

  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }

  updateEditingTodo(todo: Todo, editedTitle: string) {
    editedTitle = editedTitle.trim();
    todo.editing = false;

    if (editedTitle.length === 0) {
      return this.todoDataService.remove(todo);
    }

    todo.title = editedTitle;
    this.todoDataService.updateTodoById(todo.id, todo);
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
