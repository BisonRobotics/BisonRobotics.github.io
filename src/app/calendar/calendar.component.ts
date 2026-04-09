import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { EventDisplayComponent } from '../event-display/event-display.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  constructor(public dialog: MatDialog) {}

  calendarOptions: CalendarOptions = {
    themeSystem: 'bootstrap5',
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, googleCalendarPlugin],
    //add environment variable perhaps
    googleCalendarApiKey: 'AIzaSyCXCN2IyYUlth2t3pjNnQTK5lNsLyP9wFo',
    events: {
      googleCalendarId:
        //add environement variable perhaps
        'faa536c5da165c4230b5a8e9b6d60bb5772149fc6ed416ed83fb557d4ec5b9bc@group.calendar.google.com',
    },
    eventClick: (info) => {
      this.dialog.open(EventDisplayComponent, {
        data: info.event,
      });
      info.jsEvent.preventDefault(); // don't let the browser navigate
    },
    eventColor: '#0f5640',
    eventTextColor: '#0f5640',
    eventDisplay: 'block',
  };
}
