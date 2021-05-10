import {Todo} from './todo';

describe('Todo class', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: 'hello',
      complete: true,
      dueDate: '2020-05-11'
    });
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
    expect(todo.dueDate).toEqual('2020-05-11');
  });
});