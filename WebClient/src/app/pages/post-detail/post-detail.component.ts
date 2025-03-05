import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-post-detail',
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  // //Code Project - Live Data Version
  post!: Post; // Store post data
  isLoading = false; // Display loading status

  constructor(
    private route: ActivatedRoute,   // Retrieve ID from URL
    private router: Router,          // Used for navigation back
    private postService: PostService // Used to call API to fetch post data

  ) {}

  ngOnInit(): void {
    this.loadPost(); // Load Posts
  }

  // Load post by ID
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
          console.error('Error loading post details');
          this.router.navigate(['/']);
        }
      });
    }
  }

  // Back button
  goBack(): void {
    this.router.navigate(['/']);
  }
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
