import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css'
})
export class SponsorsComponent {

  collegiateSponsors: { name: string, imgSrc: string }[] = [
    { name: 'NDSU Mechanical Engineering', imgSrc: '' },
    { name: 'NDSU Student Government', imgSrc: '' },
    { name: 'NDSU Industrial Manufacturing Engineering', imgSrc: '' },
    { name: 'NDSU College of Engineering', imgSrc: '' }
  ];

  levelFiveSponsors: { name: string, imgSrc: string }[] = [];

  levelFourSponsors: { name: string, imgSrc: string }[] = [
    { name: 'Marvin', imgSrc: '' },
    { name: 'Blow Molded Specialties', imgSrc: '' },
    { name: 'Packet Digital', imgSrc: '' }
  ];

  levelThreeSponsors: { name: string, imgSrc: string }[] = [
    { name: 'Dakota Lithium', imgSrc: '' }
  ];

  levelTwoSponsors: { name: string, imgSrc: string }[] = [
    { name: 'American Engineering Testing', imgSrc: '' },
    { name: 'Bobcat', imgSrc: '' },
    { name: 'Lulzbot', imgSrc: '' }
  ];

  levelOneSponsors: { name: string, imgSrc: string }[] = [
    { name: 'Apec Engineering Group', imgSrc: '' }
  ];

}
