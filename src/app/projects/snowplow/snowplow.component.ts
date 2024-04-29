import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-snowplow',
  standalone: true,
  imports: [
    ProjectComponent
  ],
  templateUrl: './snowplow.component.html',
  styleUrl: './snowplow.component.css'
})
export class SnowplowComponent {

  banner = {
    src: '../../assets/images/snowplow-banner.png',
    alt: 'Autonomous Snowplow Banner'
  };

  text = `
  The autonomous snowplow project is to design and build a completely
  autonomous robot to plow snow. The competition is held every January
  and focuses on plowing simulated sidewalks while avoiding both
  moving and stationary obstacles. This requires the project to leverage
  robust mechanical designs, an array of sensors, and thousands of lines
  of code. The competition is organized by the Institute of Navigation.
  `;

  name = 'Autonomous Snowplow';

}
