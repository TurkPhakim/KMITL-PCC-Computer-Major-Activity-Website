import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navbarOpen = false; // Initial state of the hamburger menu button

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen; // Toggle state when the button is clicked
  }

  isLoggedIn = false; // Initial state of login/logout button

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn; // Toggle state when the button is clicked
  }
}