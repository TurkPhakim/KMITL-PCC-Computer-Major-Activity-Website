import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from '../models/post'; // Import the Post interface
import { environment } from '../../environments/environment.development'; // Environment Variable

@Injectable({
  providedIn: 'root' // PostService injected throughout the app
})
export class PostService {
  //private apiBaseUrl = 'http://localhost:3000';
  private apiBaseUrl = `${environment.apiBaseUrl}/activities`; // Environment API URL
  private imageBaseUrl = 'http://localhost:3000/images/';

  constructor(private http: HttpClient) {}

  // Fetch all posts (Supports Pagination & Category Filter)
  getPosts(page: number, category: string = 'all'): Observable<Post[]> {
    const headers = this.getAuthHeaders();
    return this.http
      .get<Post[]>(`${this.apiBaseUrl}?page=${page}&category=${category}`, { headers })
      .pipe(
        map(posts =>
          posts.map(post => ({
            ...post,
            coverImage: post.coverImage ? this.imageBaseUrl + post.coverImage : '', // Fix cover image path
            images: post.images ? post.images.map(img => this.imageBaseUrl + img) : [] // Fix additional images
          }))
        ),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }

  // getPosts(page: number, category: string = 'all'): Observable<Post[]> {
  //   const headers = this.getAuthHeaders();
  //   return this.http.get<Post[]>(${this.apiBaseUrl}?page=${page}&category=${category}, { headers })
  //     .pipe(catchError(this.handleError<Post[]>('getPosts', [])));
  // } 

  // // Fetch post by ID
  // getPostById(id: string): Observable<Post> {
  //   const headers = this.getAuthHeaders();
  //   return this.http.get<Post>(`${this.apiBaseUrl}/${id}`, { headers })
  //     .pipe(catchError(this.handleError<Post>('getPostById')));
  // }

  getPostById(id: string): Observable<Post> { 
    const headers = this.getAuthHeaders();  
    return this.http.get<Post>(`${this.apiBaseUrl}/${id}`, { headers }).pipe(
      map(post => ({
        ...post,
        coverImage: post.coverImage ? this.imageBaseUrl + post.coverImage : '', // Fix cover image path
        images: post.images ? post.images.map(img => this.imageBaseUrl + img) : []
      })),
      catchError(this.handleError<Post>('getPostById'))
    ); 
  }

  // Create a new post
  createPost(post: Post): Observable<Post> {
    const headers = this.getAuthHeaders();
    return this.http.post<Post>(this.apiBaseUrl, post, { headers })
      .pipe(catchError(this.handleError<Post>('createPost')));
  }

  // Update post
  updatePost(id: string, post: Post): Observable<Post> {
    const headers = this.getAuthHeaders();
    return this.http.put<Post>(`${this.apiBaseUrl}/${id}`, post, { headers })
      .pipe(catchError(this.handleError<Post>('updatePost')));
  }

  // Delete post
  deletePost(id: string): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiBaseUrl}/${id}`, { headers })
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