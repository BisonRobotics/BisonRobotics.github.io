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
  Robot in 3 Days is a project where we take the typical 6 week FIRST
  Robotics Competition (FRC) challenge season and condense it to 3 days.
  The project is focused on mentoring hundreds of teams and highschool
  students through YouTube, technical papers, and social media.
  `;

  name = 'Robot in 3 Days'

}
