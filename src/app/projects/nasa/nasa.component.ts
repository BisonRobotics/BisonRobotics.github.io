import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-nasa',
  standalone: true,
  imports: [
    ProjectComponent
  ],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.css'
})
export class NasaComponent {

  banner = {
    src: '../../assets/images/nasa-banner.png',
    alt: 'Nasa Lunabotics Banner'
  };

  text = `
  NASA Robotics Mining Competition is a challenge to build, design, 
  and program a lunar rover with the purpose of mining for ice and 
  other materials on the moon. Due to budget constraints this year, 
  we will not be competing on the Moon, but instead at Kennedy Space 
  Center in Florida.
  `;

  name = 'NASA Lunabotics';

}
