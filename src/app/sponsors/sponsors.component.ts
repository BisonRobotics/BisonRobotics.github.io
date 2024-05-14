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
    { name: 'NDSU Mechanical Engineering', imgSrc: '../../assets/images/sponsor-logos/ndsu-mechanical-engineering.png' },
    { name: 'NDSU Student Government', imgSrc: '../../assets/images/sponsor-logos/ndsu-student-government.png' },
    { name: 'NDSU Industrial and Manufacturing Engineering', imgSrc: '../../assets/images/sponsor-logos/ndsu-ime.png' },
    { name: 'NDSU College of Engineering', imgSrc: '../../assets/images/sponsor-logos/ndsu-coe.png' }
  ];

  levelFiveSponsors: { name: string, imgSrc: string }[] = [];

  levelFourSponsors: { name: string, imgSrc: string }[] = [
    { name: 'Marvin', imgSrc: '../../assets/images/sponsor-logos/marvin.png' },
    { name: 'Blow Molded Specialties', imgSrc: '../../assets/images/sponsor-logos/blow-molded-specialties.png' },
    { name: 'Packet Digital', imgSrc: '../../assets/images/sponsor-logos/packet-digital.png' }
  ];

  levelThreeSponsors: { name: string, imgSrc: string }[] = [
    { name: 'Dakota Lithium', imgSrc: '../../assets/images/sponsor-logos/dakota-lithium.png' }
  ];

  levelTwoSponsors: { name: string, imgSrc: string }[] = [
    { name: 'American Engineering Testing', imgSrc: '../../assets/images/sponsor-logos/american-engineering-testing.png' },
    { name: 'Bobcat', imgSrc: '../../assets/images/sponsor-logos/bobcat.svg' },
    { name: 'Lulzbot', imgSrc: '../../assets/images/sponsor-logos/lulzbot.png' }
  ];

  levelOneSponsors: { name: string, imgSrc: string }[] = [
    { name: 'Apex Engineering Group', imgSrc: '../../assets/images/sponsor-logos/apex-engineering.png' }
  ];

}
