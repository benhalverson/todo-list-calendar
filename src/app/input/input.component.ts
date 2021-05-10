import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  //Another way to do this is using observables specifically a Behavior subject.
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Placeholder text';

  changeData(data: string) {
    this.submit.emit(data);
    console.log('data', data);
  }
}
