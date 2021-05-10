import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { TodoListService } from './todo-list.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListStorageService } from './todo-list-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [TodoListService, TodoListStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
