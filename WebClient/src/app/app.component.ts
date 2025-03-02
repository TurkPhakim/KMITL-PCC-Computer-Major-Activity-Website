import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
//import { UpPostComponent } from "./up-post/up-post.component";

@Component({
  selector: 'app-root',
  standalone: true,  // Uses Standalone Component
  imports: [
    RouterModule,  // Supports Routing
    HeaderComponent,  // Import Header
    NavbarComponent,  // Import Navbar
    FooterComponent,  // Import Footer
  ],
  template: `
    <app-header></app-header>  <!-- Header -->
    <app-navbar></app-navbar>  <!-- Navbar -->
    <main class="container mt-4">
      <router-outlet></router-outlet>  <!--  Displays page based on the Route  -->
    </main>
    <app-footer></app-footer>  <!-- Footer -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'base';
}