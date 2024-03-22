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
  VEX Robotics releases a new engineering challenge each year 
  for teams to solve in a head-to-head robotics competition. 
  This year, the VEX U team has moved into The Incubator at the 
  NDSU Research & Technology Park. We are ready to get back to 
  an in-person competition with this year's challenge – Tipping Point.
  `;

  name = 'Vex U';
  
}
