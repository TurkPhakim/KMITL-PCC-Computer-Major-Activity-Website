import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Post } from '../../models/post';

@Component({
  standalone: true,
  selector: 'app-post-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() post!: Post;   // Use Post model instead of multiple input fields
  @Input() routerLink!: any; // ✅ รับค่า routerLink เพื่อให้สามารถทำงานได้
}