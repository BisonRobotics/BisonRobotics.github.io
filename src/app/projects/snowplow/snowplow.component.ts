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
  Autonomous Snowplow challenges students to design and build a 
  fully autonomous snowplow to remove snow from a path. While also 
  detecting and avoiding obstacles. We are excited to finish, test, 
  and compete with our new snowplow HyFlex. We will be competing next 
  January at Dunwoody College of Technology.
  `;

  name = 'Autonomous Snowplow';

}
