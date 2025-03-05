// Create AdminGuard for pages restricted to Admin only
import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(): Observable<boolean> {
    return this.authService.getUserRole().pipe(
      map(role => {
        console.log("🔍 [AdminGuard] Role received:", role);
        if (role === 'admin') {
          return true;
        } else {
          console.warn('⛔ Access Denied - Not Admin');
          this.router.navigate(['/']);
          return false;
        }
      }),
    catchError(() => {
        this.router.navigate(['/']);
        return of(false);
      })
    );
  }
}