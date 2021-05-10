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