export class Todo {
  id: any;
  title = '';
  complete = false;
  editing = false;
  dueDate = ''

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}