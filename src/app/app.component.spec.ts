import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { TodoListService } from './todo-list.service';

describe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [TodoListService]
    });
  });

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', waitForAsync(() => {
    expect(app).toBeTruthy();
  }));
});
