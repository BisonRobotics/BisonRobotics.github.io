import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) { }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
