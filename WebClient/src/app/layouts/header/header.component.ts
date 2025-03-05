import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';  // Import AuthService
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [NavbarComponent, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Fixed typo
})
export class HeaderComponent implements OnInit {
  navbarOpen: boolean = false; // Initial state of the hamburger menu button
  isLoggedIn: boolean = false; // User login status
  userRole: string | null = null;  // Store user role
  isAdmin: boolean = false;  // true user -> Admin

  constructor(private router: Router, private authService: AuthService) { }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen; // Toggle state when the button is clicked
  }

  // Function back Home-page
  goHome(): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    // allow pasting - Enable command input in Console (DevTools)
    (window as any).authService = this.authService;
    console.log('🔄 Checking login status...');

    // Initialize login status and user role from localStorage
    this.isLoggedIn = this.authService.isLoggedIn();

    this.isAdmin = this.userRole === 'admin';

    // Use BehaviorSubject (auth.service.ts) to get the latest value after refresh
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
      console.log('✅ Updated Login Status:', this.isLoggedIn);
    });

    this.authService.userRole$.subscribe(role => {
      this.userRole = role;
      this.isAdmin = role === 'admin';
      console.log('✅ Updated User Role:', this.userRole);
    });

    // Load status from API
    forkJoin({
      loginStatus: this.authService.checkLoginStatus(),
      role: this.authService.getUserRole()
    }).subscribe({
      next: ({ loginStatus, role }) => {
        this.authService.setLoginStatus(loginStatus);
        this.authService.setUserRole(role);

        // Header : Update value
        this.isLoggedIn = loginStatus;
        this.userRole = role;
        this.isAdmin = role === 'admin';
      },
      error: (err) => {
        console.error('❌ Status check failed:', err);
        this.authService.setLoginStatus(false);
        this.authService.setUserRole(null);

        // Header : Update value
        this.isLoggedIn = false;
        this.userRole = null;
        this.isAdmin = false;
      }
    });
  }

  updateUserRole(): void {
    this.authService.getUserRole().subscribe({
      next: (role) => {
        this.userRole = role;
        this.isAdmin = role === 'admin'; //  Update Admin status
        this.isLoggedIn = role !== null;
        console.log('✅ Update user role:', role);
        console.log('🔍 Updated Login Status:', this.isLoggedIn);
      },
      error: (err) => {
        console.error('❌ Failed to retrieve user role:', err);
        this.userRole = null;
        this.isAdmin = false;
        this.isLoggedIn = false;
      }
    });
  }

  // Function LogIn
  login(): void {
    console.log('🚀 Logging in as User...');

    this.authService.login('user@example.com', 'user123').subscribe({
      next: (response) => {
        console.log('✅ Login Successful:', response);

        this.authService.setLoginStatus(true);

        // Update user role after successful login
        this.authService.getUserRole().subscribe({
          next: (role) => {
            this.authService.setUserRole(role);

            // Header : Update value
            this.isLoggedIn = true;
            this.userRole = role;
            this.isAdmin = role === 'admin';

            console.log('🔍 Updated Login Status:', this.isLoggedIn);
            console.log('🔍 Updated User Role:', this.userRole);

            this.router.navigate(['/']);
          },
          error: (err) => {
            console.error('❌ Failed to retrieve user role:', err);
            this.authService.setUserRole(null);
            this.isLoggedIn = false;
            this.userRole = null;
            this.isAdmin = false;
          }
        });
      },
      error: (err) => console.error('Login Error:', err)
    });
  }

  // Function LogOut
  logout(): void {
    console.log('🚪 Logging out...');
    this.authService.logout().subscribe({
      next: () => {
        console.log('✅ Logout successful!');
        localStorage.removeItem('token');
        this.authService.setLoginStatus(false);
        this.authService.setUserRole(null);

        // Header : Update value
        this.isLoggedIn = false;
        this.userRole = null;
        this.isAdmin = false;

        this.router.navigate(['/']);
      },
      error: (err) => console.error('❌ Logout failed:', err)
    });
  }
}