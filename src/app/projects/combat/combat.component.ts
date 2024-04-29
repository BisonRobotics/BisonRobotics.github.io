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
  Combat Robotics (battlebots) is exactly what it sounds like; two robots
  enter an arena and fight each other TO THE DEATH. We design, build, and
  compete with several different robots in the 15-lb and 30-lb weight
  classes.
  `;

  name = 'Combat Robotics';

}
