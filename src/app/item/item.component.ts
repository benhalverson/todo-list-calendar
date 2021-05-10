import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit{
  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();

  isComplete = false;

  ngOnInit() {
    console.log('todo item', this.todoItem);
  }

  removeItem() {
    this.remove.emit(this.todoItem);
    console.log('removing todo');
  }

  completeItem(): boolean {
    return this.isComplete = !this.isComplete;
  }
}
