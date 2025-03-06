import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';
import { Post } from '../../models/post';
import { CommonModule } from '@angular/common';
// import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  standalone: true,
  selector: 'app-post-detail',
  imports: [CommonModule, ConfirmDialogComponent],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  // //Code Project - Live Data Version
  @Input() post: any;  
  @Output() postUpdated = new EventEmitter<void>();

  // post!: Post; // Store post data
  isLoading = false; // Display loading status
  isAdmin = false; // Check-Admin Privileges
  isDeleting = false; // Delete-Post loading status
  isPinning = false; // Pin-Post loading status
  showDeleteDialog = false; // Var Control Dialog 

  constructor(
    private route: ActivatedRoute,   // Retrieve ID from URL
    private router: Router,          // Used for navigation back
    private postService: PostService, // Used to call API to fetch post data
    private authService: AuthService  
    // private dialog: MatDialog 
  ) { }

  ngOnInit(): void {
    this.loadPost(); // Load Posts
    this.checkAdmin(); // Check-Admin
  }

  // Check-Admin
  checkAdmin(): void {
    this.authService.isAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
  }

  // Load posts from Backend
  loadPost(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Retrieve ID from URL
    if (id) {
      this.isLoading = true;
      this.postService.getPostById(id).subscribe({
        next: (post) => {
          this.post = post;
          this.isLoading = false;
        },
        error: () => {
          // If post retrieval fails, navigate back to Home
          console.error('❌ Error loading post details');
          this.router.navigate(['/']);
        }
      });
    }
  }

  // Function Delete-Post
  deletePost(): void {
    if (!this.post) return;
    this.isDeleting = true;
    this.postService.deletePostWithConfirmation(this.post.id).subscribe(success => {
      if (success) {
        alert('❌ลบโพสต์สำเร็จ!❌');
        this.router.navigate(['/']); // Navigate back to Home after successful Post-Deletion
      }
      this.isDeleting = false; // Close Delete-Post loading
    });
    this.showDeleteDialog = false; // Close Dialog after Post-Deletion
  }

  //  Function open Confirmation-Dialog for post deletion
  openDeleteDialog(): void {
    this.showDeleteDialog = true;
  }

  // Function Edit-Post
  editPost(): void {
    this.router.navigate(['/edit', this.post.id]);
  }

  // Function Pin-Post
  togglePinPost(): void {
    if (!this.post) return;
    this.isPinning = true;
  
    this.postService.pinPost(this.post.id, !this.post.isPinned).subscribe({
      next: updatedPost => {
        if (updatedPost) {
          this.post.isPinned = updatedPost.isPinned;
          this.postUpdated.emit();
          // this.updatePostOrder(); // อัปเดตลำดับโพสต์
          console.log("📌 ปักหมุดโพสต์สำเร็จ:", updatedPost);
        }
      },
      error: err => {
        console.error('❌ Error:', err);
      },
      complete: () => {
        this.isPinning = false;
      }
    });
  }

  // Back button
  goBack(): void {
    this.router.navigate(['/']);
  }

    // // Dialog Confirm Box
    // openDeleteDialog(): void {
    //   const dialogRef = this.dialog.open(DeleteConfirmComponent, {
    //     width: '300px',
    //     data: { title: this.post.title }
    //   });
  
    //   dialogRef.afterClosed().subscribe((confirmed) => {
    //     if (confirmed) {
    //       this.confirmDelete();
    //     }
    //   });
    // }

  //---------------------------------------------------------

  //---------------------------------------------------------
  //Test Mock Data 3rd
  //Use Mock Data for testing instead of fetching from API
  //   post!: Post;
  //   isLoading = false;

  //   constructor(private route: ActivatedRoute, private router: Router) {}

  //   ngOnInit(): void {
  //     this.loadMockPost(); // Load mock data
  //   }

  //   // Mock Data
  //   loadMockPost(): void {
  //     this.isLoading = true;
  //     const mockPosts: Post[] = [
  //       {
  //         id: '1',
  //         coverImage: '../../assets/Test-Pic.jpg',
  //         title: 'การนำเสนอโปรเจคสหกิจศึกษา ของพี่ ๆ ชั้นปีที่ 4',
  //         lecturer: 'อาจารย์ รัตติกร สมบัติแก้ว',
  //         location: 'E301',
  //         date: '18 ธันวาคม 2567',
  //         description: '9 ขุนเขา 8 ศรีธันดร 1 โลกธาตุ 1000 จักรวาล รวมเป็น สหัสโลกธาตุ ตรี สหัสโลกธาตุ รวมกัน ไม่มีสิ่งใดที่ตัดไม่ได้ วิชาลับ 3 ดาบ สหัสตรีสหัสสมหาสหโลกธาตุ',
  //         category: 'event',
  //         externalLink: 'https://www.facebook.com/Prt.ChumphonProvincialPolice',
  //         images: ['../../assets/Phusit-test.jpg', '../../assets/Phusit2-test.jpg'],
  //       },
  //       {
  //         id: '2',
  //         coverImage: '../../assets/Test-Pic.jpg',
  //         title: 'Open house ลาดกระบังชุมพร',
  //         lecturer: 'อาจารย์ รัตติกร สมบัติแก้ว',
  //         location: 'B301',
  //         date: '13 ธันวาคม 2567',
  //         description: '9 ขุนเขา 8 ศรีธันดร 1 โลกธาตุ 1000 จักรวาล รวมเป็น สหัสโลกธาตุ ตรี สหัสโลกธาตุ รวมกัน ไม่มีสิ่งใดที่ตัดไม่ได้ วิชาลับ 3 ดาบ สหัสตรีสหัสสมหาสหโลกธาตุ',
  //         category: 'news',
  //         externalLink: 'https://www.facebook.com/Prt.ChumphonProvincialPolice',
  //         images: ['../../assets/Phusit-test.jpg', '../../assets/Phusit2-test.jpg'],
  //       },
  //       {
  //         id: '3',
  //         coverImage: '../../assets/Test-Pic.jpg',
  //         title: 'ศึกษาดูงานกับหน่วยงานของบริษัทเอกชน ประจำชั้นปีที่ 3',
  //         lecturer: 'อาจารย์ รัตติกร สมบัติแก้ว',
  //         location: 'KBTG',
  //         date: '18 ธันวาคม 2567',
  //         description: '9 ขุนเขา 8 ศรีธันดร 1 โลกธาตุ 1000 จักรวาล รวมเป็น สหัสโลกธาตุ ตรี สหัสโลกธาตุ รวมกัน ไม่มีสิ่งใดที่ตัดไม่ได้ วิชาลับ 3 ดาบ สหัสตรีสหัสสมหาสหโลกธาตุ',
  //         category: 'event',
  //         externalLink: 'https://www.facebook.com/Prt.ChumphonProvincialPolice',
  //         images: ['../../assets/Phusit-test.jpg', '../../assets/Phusit2-test.jpg'],
  //       },
  //     ];

  //     const postId = this.route.snapshot.paramMap.get('id');
  //     this.post = mockPosts.find((p) => p.id === postId)!;

  //     setTimeout(() => {
  //       this.isLoading = false;
  //     }, 1000);
  //   }

  //   goBack(): void {
  //     this.router.navigate(['/']);
  //   }
  //   //---------------------------------------------------------
}
