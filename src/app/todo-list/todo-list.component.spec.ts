import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { TodoListService } from '../todo-list.service';
import { TodoListComponent } from './todo-list.component';

describe('AppComponent', () => {
  let fixture;
  let component;
  let todoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        TodoListComponent
      ],
      providers: [TodoListService]
    });
  });

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.debugElement.componentInstance;
    todoDataService = fixture.debugElement.injector.get(TodoListService);
  }));

  it('should create the app', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have a newTodo todo`, waitForAsync(() => {
    expect(component.newTodo instanceof Todo).toBeTruthy()
  }));

  it('should display "Todos" in h1 tag', waitForAsync(() => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todos');
  }));

  it('should add a todo', waitForAsync(() => {
    spyOn(todoDataService, 'addTodo');
    component.addTodo();
    expect(todoDataService.addTodo).toHaveBeenCalled();
  }));

  it('should complete a todo', waitForAsync(() => {
    spyOn(todoDataService, 'toggleTodoComplete');
    component.toggleTodoComplete();
    expect(todoDataService.toggleTodoComplete).toHaveBeenCalled();
  }));

  it('should remove a todo', waitForAsync(() => {
    spyOn(todoDataService, 'deleteTodoById');
    component.removeTodo(1);
    expect(todoDataService.deleteTodoById).toHaveBeenCalled();
  }));
});