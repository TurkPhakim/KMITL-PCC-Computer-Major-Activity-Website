import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';  // Import HttpClient
// import { environment } from '../../../../environments/environment'; // Environment Variable
import { AuthService } from '../../../services/auth.service'; // Import AuthService

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private http: HttpClient
    private authService: AuthService // Inject AuthService

  ) {
    this.signUpForm = this.fb.group({
      // Username & Email & Password & ConfirmPassword Validation
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Function Sign-up
  signUp() {
    if (this.signUpForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const { username, email, password, confirmPassword } = this.signUpForm.value;

    // Trim input data to prevent extra spaces
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();

    // Check for empty spaces
    if (!trimmedUsername || !trimmedEmail || !password) {
      this.errorMessage = 'กรุณากรอกข้อมูลให้ครบถ้วน';
      this.isLoading = false;
      return;
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      this.errorMessage = 'อีเมลไม่ถูกต้อง';
      this.isLoading = false;
      return;
    }

    // Verify that passwords match
    if (password !== confirmPassword) {
      this.errorMessage = 'รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน';
      this.isLoading = false;
      return;
    }
// -----------------------------------------------------------------------------
    // Code Project - Connect Back-end (Node.js + Express) Version 2
    // AuthService for Sign-Up
    this.authService.signUp(trimmedUsername, trimmedEmail, password)
      .subscribe({
        next: () => {
          alert('ลงทะเบียนสำเร็จแล้ว! กรุณาเข้าสู่ระบบ KMITL CE ได้เลย');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.errorMessage = 'เกิดข้อผิดพลาด: ' + (error.error?.message || 'โปรดลองใหม่อีกครั้ง');
          this.isLoading = false;
        }
      });
// -----------------------------------------------------------------------------
    // Code Project - Connect Back-end (Node.js + Express) Version 1
    // this.http.post<{ message: string }>(
    //   `${environment.apiBaseUrl}/signup`, // Retrieve API URL from Environment
    //   { username, email, password }
    // )
    //   .subscribe({
    //     next: (response) => {
    //       alert('ลงทะเบียนสำเร็จ! กรุณาเข้าสู่ระบบ');
    //       this.router.navigate(['/login']);
    //     },
    //     error: (error: HttpErrorResponse) => { // Handle Error Response
    //       this.errorMessage = 'เกิดข้อผิดพลาด: ' + (error.error?.message || 'โปรดลองอีกครั้ง');
    //       this.isLoading = false;
    //     }
    //   });
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
    // // Test Mock API in Frontend
    // // Test Simulate SignUp       
    // setTimeout(() => {
    //   // Retrieve mock data from LocalStorage
    //   let users = JSON.parse(localStorage.getItem('mockUsers') || '[]');

    //   // Add new user to LocalStorage
    //   const newUser = { username: trimmedUsername, email: trimmedEmail, password };
    //   users.push(newUser);
    //   localStorage.setItem('mockUsers', JSON.stringify(users));

    //   alert('ลงทะเบียนสำเร็จ! กรุณาเข้าสู่ระบบ');
    //   this.router.navigate(['/login']);

    //   this.isLoading = false;
    // }, 2000); // Mock API Delay 2 Sec.
// -----------------------------------------------------------------------------
  }
}