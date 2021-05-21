export class Todo {
  id: any;
  title = '';
  complete = false;
  editing = false;
  date = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
