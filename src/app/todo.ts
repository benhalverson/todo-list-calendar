export class Todo {
  id: number;
  title = '';
  complete = false;
  editing = false;
  dueDate = ''

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}