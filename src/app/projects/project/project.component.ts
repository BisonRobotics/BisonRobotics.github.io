import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  @Input() projectName: string = '';
  @Input() banner: { src: string, alt: string } = { src: '', alt: '' };
  @Input() text: string = '';

  constructor() { }

}
