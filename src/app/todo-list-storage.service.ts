import { Injectable } from '@angular/core';
const storageName = 'aah_todo_list';
const defaultList = [
	{ title: 'install NodeJS' },
	{ title: 'install Angular CLI' },
	{ title: 'create new app' },
	{ title: 'serve app' },
	{ title: 'develop app' },
	{ title: 'deploy app' }
];
@Injectable({
	providedIn: 'root'
})
export class TodoListStorageService {
	private todoList;

	constructor() {
		const storage = localStorage.getItem(storageName);
		// It's possible for localstorage to be null so this does a check to keep the typescript linter happy.
		this.todoList = storage !== null ? JSON.parse(storage) : '';
	}

	// get items
	get() {
		return [ ...this.todoList ];
	}

	// add a new item
	post(item: string) {
		this.todoList.push(item);
		return this.update();
	}

	// update an item
	put(item: string, changes: string) {
		Object.assign(this.todoList[this.findItemIndex(item)], changes);
		return this.update();
	}

	// remove an item
	destroy(item: string) {
		this.todoList.splice(this.findItemIndex(item), 1);
		return this.update();
	}

	private update() {
		localStorage.setItem(storageName, JSON.stringify(this.todoList));

		return this.get();
	}

	private findItemIndex(item: string) {
		return this.todoList.indexOf(item);
	}
}
