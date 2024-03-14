import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: { name: string, navigate: () => void }[] = [
    {
      name: 'NASA Lunabotics',
      navigate: () => this.navigate('projects/nasa')
    },
    {
      name: 'Autonomous Snowplow',
      navigate: () => this.navigate('projects/snowplow')
    },
    {
      name: 'Combat Robotics',
      navigate: () => this.navigate('projects/combat')
    },
    {
      name: 'Ri3D',
      navigate: () => this.navigate('projects/ri3d')
    },
    {
      name: 'Vex U',
      navigate: () => this.navigate('projects/vexu')
    }
  ];

  constructor(private router: Router) { }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
