import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-volunteering',
  standalone: true,
  imports: [
    ProjectComponent
  ],
  templateUrl: './volunteering.component.html',
  styleUrl: './volunteering.component.css'
})
export class VolunteeringComponent {

  banner = {
    src: '',
    alt: 'Volunteering Banner'
  }

  text = `
  Bison Robotics focuses most of our volunteering efforts on helping
  the next generation find their start. Working with FIRST volunteering
  at regional competitions and local Girl and Boy Scout troops to help
  them earn their robotics badges. We also have the opportunity to
  mentor FLC, FLL, and FTC teams in the area. Each year, Bison Robotics
  members volunteer over 2,000 hours. Volunteering is lots of fun to
  work with students of all ages, and of course lots of ROBOTS!
  `;

  name = 'Volunteering';

}
