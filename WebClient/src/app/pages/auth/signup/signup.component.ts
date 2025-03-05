import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

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
    private authService: AuthService
  ) {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordsMatchValidator });
  }

  // Custom validator to check if passwords match
  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  signUp() {
    if (this.signUpForm.invalid) {
      this.errorMessage = "กรุณากรอกข้อมูลให้ถูกต้อง";
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    let { username, email, password } = this.signUpForm.value;

    username = username.trim();
    email = email.trim();

    if (!username || !email || !password) {
      this.errorMessage = 'กรุณากรอกข้อมูลให้ครบถ้วน';
      this.isLoading = false;
      return;
    }

    this.authService.signUp(username, email, password)
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
  }
}
