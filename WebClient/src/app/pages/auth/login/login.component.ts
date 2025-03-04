import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Import HttpClient
// import { environment } from '../../../../environments/environment'; // Environment Variable
import { AuthService } from '../../../services/auth.service'; // Import AuthService


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private http: HttpClient
    private authService: AuthService // Inject AuthService
  ) {
    this.loginForm = this.fb.group({
      // Email & Password Validation
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Function Log-in
  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const { email, password } = this.loginForm.value;
// -----------------------------------------------------------------------------
    // Code Project - Connect Back-end (Node.js + Express) Version 2
    // AuthService for Log-In
    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.errorMessage = error;
        this.isLoading = false;
      }
    });
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
    // Code Project - Connect Back-end (Node.js + Express) Version 1
    // Use this.http.post() to send credentials to the server -> Server returns token and role
    // this.http.post<{ token: string; role: string }>(
    //   `${environment.apiBaseUrl}/login`, // Retrieve API URL from Environment
    //   { email, password }
    // )
    //   .subscribe({
    //     // Save token and role to localStorage
    //     next: (response) => {
    //       localStorage.setItem('token', response.token);
    //       localStorage.setItem('role', response.role);
    //       this.router.navigate(['/']);
    //     },
    //     error: (_error: HttpErrorResponse) => { // Handle Error Response
    //       this.errorMessage = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
    //       this.isLoading = false;
    //     }
    //   });
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
    // Test Mock API in Frontend
    // Test Simulate LogIn 
//     setTimeout(() => {
//       const { email, password } = this.loginForm.value;

//       // Simulate valid account data
//       if (email === 'admin@example.com' && password === 'admin123') {
//         localStorage.setItem('token', 'admin-token');
//         localStorage.setItem('role', 'admin'); // Admin role
//         this.router.navigate(['/']);
//       } else if (email === 'user@example.com' && password === 'user123') {
//         localStorage.setItem('token', 'user-token');
//         localStorage.setItem('role', 'user'); // User role
//         this.router.navigate(['/']);
//       } else {
//         this.errorMessage = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
//       }

//       this.isLoading = false;
//     }, 2000); // Mock API Delay 2 Sec.
// // -----------------------------------------------------------------------------
  }
}