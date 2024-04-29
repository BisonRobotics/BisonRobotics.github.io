import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-ri3d',
  standalone: true,
  imports: [
    ProjectComponent
  ],
  templateUrl: './ri3d.component.html',
  styleUrl: './ri3d.component.css'
})
export class Ri3dComponent {

  banner = {
    src: '../../assets/images/ri3d-banner.png',
    alt: 'Ri3D Banner'
  };

  text = `
  Ri3D is taking the FIRST Robotics Competition game and 
  building a robot in 3 days instead of the usual 6 weeks 
  allotted for teams. The robot is built with items available 
  to rookie high school teams and this project serves as a 
  role model of strategy and design for struggling teams.
  `;

  name = 'Robot in 3 Days'

}
