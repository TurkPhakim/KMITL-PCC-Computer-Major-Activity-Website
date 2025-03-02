//import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import relevant components
import { ShowPostComponent } from './pages/show-post/show-post.component';  // Show-Post -> Home Page
import { PostDetailComponent } from './pages/post-detail/post-detail.component';  // Post-Detail (หน้าแสดงรายละเอียดโพสต์)
import { UpPostComponent } from './pages/up-post/up-post.component';  // Up-Post (หน้าสร้างโพสต์)

export const routes: Routes = [
  { path: '', component: ShowPostComponent, pathMatch: 'full' },  // Home Page
  { path: 'post/:id', component: PostDetailComponent },  // View post details
  { path: 'create', component: UpPostComponent },  // Create a new post
  //{ path: 'edit/:id', component: UpPostComponent },  // Edit post

  // If an unknown route is encountered, redirect to the home page
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

//--------------------------------------------
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
//export class AppRoutingModule { }
//--------------------------------------------