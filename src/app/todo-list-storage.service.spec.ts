import { TestBed } from '@angular/core/testing';

import { TodoListStorageService } from './todo-list-storage.service';

xdescribe('TodoListStorageService', () => {
  let service: TodoListStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListStorageService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
