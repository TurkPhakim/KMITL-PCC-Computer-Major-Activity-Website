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
    <app-header *ngIf="!isUpPostPage"></app-header>  <!-- Header -->
    <app-navbar *ngIf="!isUpPostPage"></app-navbar>  <!-- Navbar -->

    <main class="container mt-4">
      <router-outlet></router-outlet>  <!--  Displays page based on the Route  -->
    </main>

    <!--  Hide Footer if on Login or Signup page -->
    <app-footer *ngIf="!isAuthPage && !isUpPostPage"></app-footer> <!-- Footer -->
    <!-- *ngIf → Conditional Rendering -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'base';
  isAuthPage = false; // Check Auth page
  isUpPostPage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        //  ตรวจจับ URL ทุกครั้งที่เปลี่ยนหน้า
        console.log("Current URL:", event.url);
        console.log("Before Update -> isAuthPage:", this.isAuthPage);
        console.log("Before Update -> isUpPostPage:", this.isUpPostPage);

        // Use setTimeout() to force reload the Footer
        setTimeout(() => {
          // Check Login or Signup page
          this.isAuthPage = event.url.includes('/login') || event.url.includes('/signup'); 
          this.isUpPostPage = event.url.includes('/create') || event.url.includes('/edit');

          console.log("After Update -> isUpPostPage:", this.isUpPostPage);
          console.log("After Update -> isAuthPage:", this.isAuthPage);
        }, 100);
      }
    });
  }
}