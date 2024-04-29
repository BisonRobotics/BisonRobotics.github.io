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
  Students design and build mining robots for a NASA-organized cometition.
  These bots navigate challenging simulated off-world terrain. During
  the competition, the robots separate extraterrestrial gravel from dust
  and return the gravel, or regolith, to a collector bin to simulate
  mining missions on other planets.
  `;

  name = 'NASA Lunabotics';

}
