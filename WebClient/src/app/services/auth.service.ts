// AuthService เป็น Service สำหรับจัดการ Authentication & Authorization 
// เป็นการรวมฟังก์ชันที่เกี่ยวข้องกับการตรวจสอบสิทธิ์ในที่เดียว
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root' // AuthService injected throughout the app
})
export class AuthService {

  private apiUrl = `${environment.apiBaseUrl}/auth`;
  private useMockAPI = environment.useMockAPI;

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private userRoleSubject = new BehaviorSubject<string | null>(this.getStoredUserRole());
  userRole$ = this.userRoleSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  // Update login status in real-time
  setLoginStatus(status: boolean) {
    this.isLoggedInSubject.next(status);
  }

  setUserRole(role: string | null) {
    this.userRoleSubject.next(role);
  }

  // Function to check the user's role
  getUserRole(): Observable<string | null> {
    if (this.useMockAPI) {
      const role = localStorage.getItem('role') || null;
      console.log("📢 [MockAPI] Retrieved role:", role);
      return of(role);
    }
    return this.http.get<{ role: string }>(`${this.apiUrl}/role`)
      .pipe(map(response => {
        console.log("✅ [Real API] Role received:", response.role);
        return response.role || null;
      }),
        catchError(() => of(null))
      );
  }

  // Retrieve role from localStorage
  private getStoredUserRole(): string | null {
    return localStorage.getItem('role');
  }

  // Function to check login status
  checkLoginStatus(): Observable<boolean> {
    if (this.useMockAPI) {
      return of(!!localStorage.getItem('token'));
    }
    return this.http.get<{ isLoggedIn: boolean }>(`${this.apiUrl}/status`)
      .pipe(map(response => response.isLoggedIn),
        catchError(() => of(false))
      );
  }

  // Check login status
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Sign-Up Function
  signUp(username: string, email: string, password: string): Observable<any> {
    // MockAPI
    if (this.useMockAPI) {
      return new Observable(observer => {
        let users = JSON.parse(localStorage.getItem('mockUsers') || '[]');
        console.log('📢 [MockAPI] Users before registration:', users);

        // Check if email is already in use
        if (users.some((user: any) => user.email === email)) {
          observer.error({ message: 'อีเมลนี้ถูกใช้งานไปแล้ว' });
        } else {
          users.push({ username, email, password });
          localStorage.setItem('mockUsers', JSON.stringify(users));
          observer.next({ message: 'ลงทะเบียนสำเร็จ!!!' });
        }
        console.log('📢 [MockAPI] Users after registration:', users);
        observer.complete();
      }).pipe(delay(2000), catchError(this.handleError));
    }

    // RealAPI
    return this.http.post<{ message: string }>(`${this.apiUrl}/signup`, { username, email, password })
      .pipe(catchError(this.handleError));
  }

  // Log-In Function
  login(email: string, password: string): Observable<{ token: string; role: string }> {
    return this.useMockAPI ? this.mockLogin(email, password) : this.realLogin(email, password);
  }

  // MockAPI
  private mockLogin(email: string, password: string): Observable<{ token: string; role: string }> {
    return new Observable<{ token: string; role: string }>((observer) => {
      setTimeout(() => {
        // Retrieve user data from LocalStorage
        let users = JSON.parse(localStorage.getItem('mockUsers') || '[]');
        console.log('📢 [MockAPI] Existing users in the system:', users);

        // Verify if email and password match the stored data
        const user = users.find((u: any) => u.email === email && u.password === password);

        if (user) {
          const token = `${user.email}-token`;
          const role = 'user';

          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          this.setLoginStatus(true);
          this.setUserRole(role);

          console.log("✅ [AuthService] User Logged In -> Role:", role);

          observer.next({ token, role });
          observer.complete();

        } else if (email === 'admin@example.com' && password === 'admin123') {
          localStorage.setItem('token', 'admin-token');
          localStorage.setItem('role', 'admin'); // Admin Role
          this.setLoginStatus(true);
          this.setUserRole('admin');

          observer.next({ token: 'admin-token', role: 'admin' });
          observer.complete();

        } else if (email === 'user@example.com' && password === 'user123') {
          localStorage.setItem('token', 'user-token'); // User Role
          localStorage.setItem('role', 'user');
          this.setLoginStatus(true);
          this.setUserRole('user');

          observer.next({ token: 'user-token', role: 'user' });
          observer.complete();

        } else {
          console.log('❌ [MockAPI]  Login failed: Incorrect email or password');
          observer.error('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
        }
      }, 2000);
    }).pipe(catchError(this.handleError));
  }

  // RealAPI
  private realLogin(email: string, password: string): Observable<{ token: string; role: string }> {

    console.log(`Shooting to login ${this.apiUrl}/login`);
    return this.http.post<{ token: string; role: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(map(response => {
        console.log('✅ [Real API] Login Response:', response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
        this.setLoginStatus(true);
        this.setUserRole(response.role);
        console.log("✅ [AuthService] User Logged In -> Role:", response.role);
        return response;
      }),
        catchError(this.handleError)
      );
  }

  // Log-Out  Function
  logout(): Observable<void> {
    return this.useMockAPI ? this.mockLogout() : this.realLogout();
  }

  // MockAPI
  private mockLogout(): Observable<void> {
    return new Observable<void>((observer) => {
      setTimeout(() => {
        this.clearSession();
        observer.next();
        observer.complete();
      }, 2000);
    });
  }

  // API
  private realLogout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/logout`, {})
      .pipe(map(() => this.clearSession()),
        catchError(this.handleError)
      );
  }

  // Clear Session data (Token & Role)
  private clearSession(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    this.setLoginStatus(false);
    this.setUserRole(null);

    console.log("✅ [AuthService] User logged out, UI updated.");
    this.router.navigate(['/']);
  }

  // Handle Error Function
  private handleError(error: HttpErrorResponse) {
    let errorMsg = 'เกิดข้อผิดพลาด โปรดลองใหม่อีกครั้ง';

    if (error.error instanceof ErrorEvent) {
      errorMsg = `Client Error: ${error.error.message}`;
    } else if (error.status === 0) {
      errorMsg = 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาลองใหม่อีกครั้ง';
    } else if (error.error?.message) {
      errorMsg = `Server Error: ${error.error.message}`;
    }

    return throwError(() => new Error(errorMsg));
  }
}