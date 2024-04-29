import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-combat',
  standalone: true,
  imports: [
    ProjectComponent
  ],
  templateUrl: './combat.component.html',
  styleUrl: './combat.component.css'
})
export class CombatComponent {

  banner = {
    src: '../../assets/images/combat-banner.png',
    alt: 'Combat Banner'
  };

  text = `
  Combat Robotics is very similar to the popular TV show Battle Bots.
  We design robots specifically to deal damage to other robots. This 
  year our group is designing 3 30-pound robots and 2 15-pound robots 
  for their respective competitions this spring.
  `;

  name = 'Combat Robotics';

}
