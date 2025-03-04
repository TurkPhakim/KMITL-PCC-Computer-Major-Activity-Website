import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // เป็นโมดูลที่รวมเอา directive และ pipe พื้นฐานที่ใช้บ่อย
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router'; // Monitor URL changes
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
//import { UpPostComponent } from "./up-post/up-post.component";

@Component({
  selector: 'app-root',
  standalone: true,  // Uses Standalone Component
  imports: [
    CommonModule,
    RouterModule,  // Supports Routing
    HeaderComponent,  // Import Header
    NavbarComponent,  // Import Navbar
    FooterComponent,  // Import Footer
  ],
  template: ` 
    <!-- Main Template Layout of the Web Page -->
    <app-header></app-header>  <!-- Header -->
    <app-navbar></app-navbar>  <!-- Navbar -->

    <main class="container mt-4">
      <router-outlet></router-outlet>  <!--  Displays page based on the Route  -->
    </main>

    <!--  Hide Footer if on Login or Signup page -->
    <app-footer *ngIf="!isAuthPage"></app-footer> <!-- Footer -->
    <!-- *ngIf → Conditional Rendering -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'base';
  isAuthPage = false; // Check Auth page

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("Current URL:", event.url);
        console.log("Before Update -> isAuthPage:", this.isAuthPage);

        // Use setTimeout() to force reload the Footer
        setTimeout(() => {
          // Check Login or Signup page
          this.isAuthPage = event.url.includes('/login') || event.url.includes('/signup'); 
          console.log("After Update -> isAuthPage:", this.isAuthPage);
        }, 100);
      }
    });
  }
}