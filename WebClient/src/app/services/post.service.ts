import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../models/post'; // Import the Post interface
import { environment } from '../../environments/environment'; // Environment Variable

@Injectable({
  providedIn: 'root' // PostService injected throughout the app
})
export class PostService {
  private apiUrl = 'http://localhost:3000';
  //private apiUrl = `${environment.apiBaseUrl}/posts`; // Environment API URL

  constructor(private http: HttpClient) {}

  // Fetch all posts (Supports Pagination & Category Filter)
  getPosts(page: number, category: string = 'all'): Observable<Post[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Post[]>(`${this.apiUrl}?page=${page}&category=${category}`, { headers })
      .pipe(catchError(this.handleError<Post[]>('getPosts', [])));
  }

  // Fetch post by ID
  getPostById(id: string): Observable<Post> {
    const headers = this.getAuthHeaders();
    return this.http.get<Post>(`${this.apiUrl}/${id}`, { headers })
      .pipe(catchError(this.handleError<Post>('getPostById')));
  }

  // Create a new post
  createPost(post: Post): Observable<Post> {
    const headers = this.getAuthHeaders();
    return this.http.post<Post>(this.apiUrl, post, { headers })
      .pipe(catchError(this.handleError<Post>('createPost')));
  }

  // Update post
  updatePost(id: string, post: Post): Observable<Post> {
    const headers = this.getAuthHeaders();
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post, { headers })
      .pipe(catchError(this.handleError<Post>('updatePost')));
  }

  // Delete post
  deletePost(id: string): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers })
      .pipe(catchError(this.handleError<void>('deletePost')));
  }

  // Function  add Authorization Headers for JWT Token
  private getAuthHeaders(): HttpHeaders {
    const authToken = localStorage.getItem('authToken') || ''; // Check token
    return new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
  }

  // Function  handle errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`); // Log Error
      return of(result as T); // Return default value -> prevent app crashes
    };
  }
}