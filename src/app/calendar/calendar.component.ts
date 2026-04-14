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
    googleCalendarApiKey: 'AIzaSyASm0hwYllS01N-t7Ezh7Q4Sxs-Eijk6S4',
    events: {
      googleCalendarId:
        //add environement variable perhaps
        '87d305acb2bb9bbeb8c7a16692a88ed5e0d864c8bd8a1d3a440bae8b3c1fe77f@group.calendar.google.com',
    },
    eventClick: (info) => {
      this.dialog.open(EventDisplayComponent, {
        data: info.event,
        panelClass: 'custom-dialog',
        hasBackdrop: true,
      });
      info.jsEvent.preventDefault(); // don't let the browser navigate
    },
    eventColor: '#0f5640',
    eventTextColor: '#0f5640',
    eventDisplay: 'block',
  };
}
