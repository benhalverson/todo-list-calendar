import {Todo} from './todo';

describe('Todo class', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const todo = new Todo({
      title: 'hello',
      complete: true,
      date: '2020-05-11'
    });
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
    expect(todo.date).toEqual('2020-05-11');
  });
});
