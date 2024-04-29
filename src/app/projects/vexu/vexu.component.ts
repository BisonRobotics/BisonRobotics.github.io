import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-vexu',
  standalone: true,
  imports: [
    ProjectComponent
  ],
  templateUrl: './vexu.component.html',
  styleUrl: './vexu.component.css'
})
export class VexuComponent {

  banner = {
    src: '../../assets/images/vexu-banner.png',
    alt: 'Vex U Banner'
  };

  text = `
  Vex U is a competition that consists of two robots working together
  to achieve a higher score than the opposing team. The matches are 2
  minutes long, 45 seconds of autonomous program, then 1 minute 15
  seconds of driver controlled play. Every year the challenge changes
  to fit real world design problems to keep innovative, cost effective
  designs alive.
  `;

  name = 'Vex U';
  
}
