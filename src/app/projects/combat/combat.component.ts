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

  text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quis voluptatibus qui quos. Sint delectus quidem
  perspiciatis. Porro odio illo earum sint debitis culpa eaque ipsa reiciendis excepturi dolore in voluptate assumenda
  amet odit, mollitia reprehenderit fugit dolor unde optio iste eligendi incidunt, eveniet minima aperiam. Fugiat ad
  quia laboriosam ducimus, pariatur blanditiis aliquam sapiente nostrum ex sunt quod qui esse quidem recusandae nobis
  iusto commodi aperiam maiores quaerat ab cupiditate illo fuga corporis modi. Tempore autem ad libero harum, repellat
  quisquam cupiditate optio, fugit similique quidem nihil ex ea repudiandae amet hic, labore beatae recusandae
  voluptas sequi. Optio, officiis ex aperiam beatae dolor saepe nesciunt vel voluptates odit aut commodi atque, vitae
  doloremque sequi nulla magnam deleniti pariatur?`;

}
