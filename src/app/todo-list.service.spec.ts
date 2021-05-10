import {TestBed, inject} from '@angular/core/testing';
import {Todo} from './todo';
import {TodoListService} from './todo-list.service';

describe('TodoListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListService]
    });
  });

  it('should create a TodoListService', inject([TodoListService], (service: TodoListService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {

    it('should return an empty array by default', inject([TodoListService], (service: TodoListService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([TodoListService], (service: TodoListService) => {
      window.localStorage.clear();
      let todo1 = new Todo({title: 'Hello 1', complete: false, dueDate: '2021-05-10', id: 1});
      let todo2 = new Todo({title: 'Hello 2', complete: true, dueDate: '2021-05-10', id: 2});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      console.log('service', service);
    }));

  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', inject([TodoListService], (service: TodoListService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false, dueDate: '2021-05-10'});
      let todo2 = new Todo({title: 'Hello 2', complete: true, dueDate: '2021-05-10'});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));

  });

  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([TodoListService], (service: TodoListService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false, dueDate: '2021-05-10'});
      let todo2 = new Todo({title: 'Hello 2', complete: true, dueDate: '2021-05-10'});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([TodoListService], (service: TodoListService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false, dueDate: '2021-05-10'});
      let todo2 = new Todo({title: 'Hello 2', complete: true, dueDate: '2021-05-10'});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });

  describe('#updateTodoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([TodoListService], (service: TodoListService) => {
      let todo = new Todo({title: 'Hello 1', complete: false, dueDate: '2020-05-10'});
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(1, {
        title: 'new title',
        dueDate: '2020-05-11'
      });
      expect(updatedTodo.title).toEqual('new title');
      expect(updatedTodo.dueDate).toEqual('2020-05-11');
    }));

    it('should return null if todo is not found', inject([TodoListService], (service: TodoListService) => {
      let todo = new Todo({title: 'Hello 1', complete: false, dueDate: '2021-05-10', id: 1});
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(2, {
        title: 'new title'
      });
      expect(updatedTodo).toEqual(null);
    }));

  });

  describe('#toggleTodoComplete(todo)', () => {

    it('should return the updated todo with inverse complete status', inject([TodoListService], (service: TodoListService) => {
      let todo = new Todo({title: 'Hello 1', complete: false, dueDate: '2021-05-10'});
      service.addTodo(todo);
      let updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(false);
    }));

  });

});