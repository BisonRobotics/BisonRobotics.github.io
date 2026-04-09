import { Component, inject, signal } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-event-display',
  standalone: true,
  imports: [],
  templateUrl: './event-display.component.html',
  styleUrl: './event-display.component.css',
})
export class EventDisplayComponent {
  data = inject(MAT_DIALOG_DATA);
  startTime = signal('');
  endTime = signal('');

  formatTime(date: Date) {
    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // convert 0 → 12

    const paddedMinutes = minutes.toString().padStart(2, '0');

    return `${hours}:${paddedMinutes} ${ampm}`;
  }

  ngOnInit() {
    this.startTime.set(this.formatTime(this.data.start));
    this.endTime.set(this.formatTime(this.data.end));
  }
}
