import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, FullCalendarModule, EventInput,  } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { TodoListService } from './todo-list.service';
import { Todo } from './todo';
export function createEventId() {
  let eventGuid = 0;
  return String(eventGuid++);
}
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

interface Data extends Todo, EventInput {
  id: number&string|any;
  title: string;
  dueDate: string;
  start: string;
  end: string;
  complete: boolean;
}
export const INITIAL_EVENTS: Data[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    dueDate: '2020-05-10',
    start: TODAY_STR,
    end: TODAY_STR,
    complete: false,
    editing: false
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR + 'T12:00:00',
    dueDate: '2020-05-10',
    complete: false,
    end: TODAY_STR,
    editing: false
  }
];


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private todoDataService: TodoListService) {
  }
  ngOnInit(): void {
   console.log('events', this.currentEvents)
   console.log('todo list localstoreage', this.todoDataService.getAllTodos());
  }
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: this.todoDataService.getAllTodos() as EventInput,
    // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[]|Todo[] = [];

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      // calendarApi.addEvent({
      //   id: createEventId(),
      //   title,
      //   start: selectInfo.startStr,
      //   end: selectInfo.endStr,
      //   allDay: selectInfo.allDay
      // });
      calendarApi.addEvent({
        id: createEventId(),
        title,
      })
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]&Todo[]) {
    this.currentEvents = events;
  }

}
