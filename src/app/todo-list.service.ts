import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable({
	providedIn: 'root'
})
export class TodoListService {

	constructor(private readonly storage:TodoListStorageService) {}
	getTodoList() {
		return this.storage.get();
	}

	addItem(title: string, ) {
		return this.storage.post(title);
	}
  
}
