import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: any;

  constructor(private readonly todoService: TodoListService) { }

  ngOnInit(): void {
  this.todoList = this.todoService.getTodoList();
  }

}
