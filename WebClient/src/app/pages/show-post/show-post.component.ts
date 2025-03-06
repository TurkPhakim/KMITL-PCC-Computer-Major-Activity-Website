import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { Post } from '../../models/post';
import { PostDetailComponent } from '../post-detail/post-detail.component';
@Component({
  standalone: true,
  selector: 'app-show-post',
  imports: [CommonModule, PostCardComponent, PostDetailComponent, FormsModule, RouterModule],
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  //Code Project - Live Data Version
    posts: Post[] = []; // Store post data
    filteredPosts: Post[] = []; // Store filtered posts
    selectedPost: any = null;
    selectedCategory: string = 'all'; // Default dropdown value
    page: number = 1; // Used for loading more posts
    limit: number = 5; // Number of posts loaded per round
    isLoading: boolean = false; // Check loading status
    hasMorePosts: boolean = true; // Check if there are remaining posts to load

    constructor(private postService: PostService) { }

    ngOnInit() {
      this.loadPosts(); // Load post data
    }

    // Load posts from PostService
    loadPosts(): void {
      if (this.isLoading) return;
      this.isLoading = true;

      this.postService.getPosts(this.page, this.selectedCategory).subscribe(
        (newPosts: Post[]) => {
          this.posts = [...this.posts, ...newPosts]; // Add new post to the list
          // If the number of fetched posts is less than the limit, all posts have been loaded
          console.log('Loaded posts:', this.posts);
          this.filterPosts();
          //this.hasMorePosts = newPosts.length > this.limit;
          this.page++; // Increment page number
          this.isLoading = false;
        },
        (error) => {
          console.error('Error loading posts:', error);
          alert('// Error occurred while loading posts. Please try again.');
          this.isLoading = false;
        }
      );
    }

    loadMorePosts() {
      this.isLoading = true; // Loader Display
      setTimeout(() => {
        const startIndex = this.filteredPosts.length;
        const additionalPosts = this.posts
          .filter((post) => this.selectedCategory === 'all' || post.category === this.selectedCategory)
          .slice(startIndex, startIndex + this.limit);

        this.filteredPosts = [...this.filteredPosts, ...additionalPosts];

        // Check if there are more posts to load 2nd
        //this.hasMorePosts = this.filteredPosts.length < this.posts.length;
        console.log("dsadasdad");
        console.log(this.posts.filter((post) => post.category === this.selectedCategory).length)
        console.log(this.filteredPosts.length)
        console.log(this.posts.length)
        console.log(this.hasMorePosts)
        
        if(this.selectedCategory != 'all'){
          this.hasMorePosts = this.filteredPosts.length < this.posts.filter((post) => post.category === this.selectedCategory).length;
        }else{
          this.hasMorePosts = this.filteredPosts.length < this.posts.length;
        }

        this.isLoading = false; // Hide Loader
    }, 1000); // Simulate data loading for 1 second
  }

    filterPosts() {
      if (this.selectedCategory === 'all') {
        this.filteredPosts = this.posts.slice(0, this.limit);
      } else {
        this.filteredPosts = this.posts
          .filter((post) => post.category === this.selectedCategory)
          .slice(0, this.limit);
      }
      console.log(this.filteredPosts.length)
      console.log(this.posts.length)
      console.log(this.hasMorePosts)
      
      if(this.selectedCategory != 'all'){
        this.hasMorePosts = this.filteredPosts.length < this.posts.filter((post) => post.category === this.selectedCategory).length;
      }else{
        this.hasMorePosts = this.filteredPosts.length < this.posts.length;
      }

      if(this.filteredPosts.length == 0 ){
        this.hasMorePosts = false
      }
    }

    // Function to change post category
    onCategoryChange(category: string): void {
      this.selectedCategory = category;
      this.page = 1;
      this.posts = [];
      this.hasMorePosts = true;
      this.loadPosts();
      this.filterPosts();
    }

    updatePostOrder() {
      this.posts.sort((a, b) => Number(b.isPinned) - Number(a.isPinned));
      this.filterPosts(); // อัปเดตโพสต์ที่แสดง
    }

  //   // Ensure pinned posts appear at the top of the Show-Post page
  //   getPosts(): void {
  //     const page = 1;
  //     const category = this.selectedCategory || 'all';
   
  //     this.postService.getPosts(page, category).subscribe(posts => { 
  //         this.posts = posts.sort((a, b) => Number(b.isPinned) - Number(a.isPinned));
  //     });
  //  }
  }
  //---------------------------------------------------------

  //---------------------------------------------------------
  // Test Mock Data 1st
  // posts: Post[] = [
  //   {
  //     id: '1',
  //     coverImage: '../../assets/Test-Pic.jpg',
  //     title: 'การนำเสนอโปรเจคสหกิจศึกษา ของพี่ ๆ ชั้นปีที่ 4',
  //     lecturer: 'อาจารย์ รัตติกร สมบัติแก้ว',
  //     location: 'E301',
  //     date: '18 ธันวาคม 2567',
  //     description: 'รายละเอียด...',
  //     category: 'กิจกรรม'
  //   },
  //   {
  //     id: '2',
  //     coverImage: '../../assets/Test-Pic.jpg',
  //     title: 'Open house ลาดกระบังชุมพร',
  //     lecturer: 'อาจารย์ รัตติกร สมบัติแก้ว',
  //     location: 'E301',
  //     date: '13 ธันวาคม 2567',
  //     description: 'รายละเอียด...',
  //     category: 'ข่าวสาร'
  //   }
  // ];
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Test Mock Data 2nd
  //Use Mock Data for testing instead of fetching from API
  // posts: Post[] = [];
  // filteredPosts: Post[] = [];
  // selectedCategory: string = 'all';
  // page: number = 1;
  // limit: number = 2;
  // isLoading: boolean = false;
  // hasMorePosts: boolean = true;

  // constructor() { }

  // ngOnInit() {
  //   this.loadMockData(); // Load mock data
  // }

  // // Mock Data
  // loadMockData() {
  //   const mockPosts: Post[] = [
  //     {
  //       id: '1',
  //       coverImage: '../../assets/Test-Pic.jpg',
  //       title: 'การนำเสนอโปรเจคสหกิจศึกษา ของพี่ ๆ ชั้นปีที่ 4',
  //       lecturer: 'อาจารย์ รัตติกร สมบัติแก้ว',
  //       location: 'E301',
  //       date: '18 ธันวาคม 2567',
  //       description: 'รายละเอียด...',
  //       category: 'event',
  //     },
  //     {
  //       id: '2',
  //       coverImage: '../../assets/Test-Pic.jpg',
  //       title: 'Open house ลาดกระบังชุมพร',
  //       lecturer: 'อาจารย์ รัตติกร สมบัติแก้ว',
  //       location: 'B301',
  //       date: '13 ธันวาคม 2567',
  //       description: 'รายละเอียด...',
  //       category: 'news',
  //     },
  //     {
  //       id: '3',
  //       coverImage: '../../assets/Test-Pic.jpg',
  //       title: 'ศึกษาดูงานกับหน่วยงานของบริษัทเอกชน ประจำชั้นปีที่ 3',
  //       lecturer: 'อาจารย์ รัตติกร สมบัติแก้ว',
  //       location: 'KBTG',
  //       date: '1 ตุลาคม 2567',
  //       description: 'รายละเอียด...',
  //       category: 'event',
  //     },
  //     {
  //       id: '4',
  //       coverImage: '../../assets/Test-Pic.jpg',
  //       title: 'โครงการพัฒนานักศึกษาให้เป็น Startup',
  //       lecturer: 'อาจารย์ รัตติกร สมบัติแก้ว',
  //       location: 'อาคาร D',
  //       date: '25 กันยายน 2567',
  //       description: 'รายละเอียด...',
  //       category: 'news',
  //     },
  //     {
  //       id: '5',
  //       coverImage: '../../assets/Test-Pic.jpg',
  //       title: 'การแข่งขันเขียนโปรแกรมระดับประเทศ',
  //       lecturer: 'อาจารย์ รัตติกร สมบัติแก้ว',
  //       location: 'ศูนย์ประชุมแห่งชาติสิริกิติ์',
  //       date: '10 สิงหาคม 2567',
  //       description: 'รายละเอียด...',
  //       category: 'event',
  //     },
  //   ];

  //   this.posts = mockPosts;
  //   this.filterPosts(); // Call the function to filter posts
  // }
  // // Function to filter posts by category
  // filterPosts() {
  //   if (this.selectedCategory === 'all') {
  //     this.filteredPosts = this.posts.slice(0, this.limit);
  //   } else {
  //     this.filteredPosts = this.posts
  //       .filter((post) => post.category === this.selectedCategory)
  //       .slice(0, this.limit);
  //   }

  //   // Check if there are more posts to load 1st
  //   this.hasMorePosts = this.filteredPosts.length < this.posts.length;
  // }

  // // Function to load more posts
  // loadMorePosts() {
  //   this.isLoading = true; // Loader Display

  //   setTimeout(() => {
  //     const startIndex = this.filteredPosts.length;
  //     const additionalPosts = this.posts
  //       .filter((post) => this.selectedCategory === 'all' || post.category === this.selectedCategory)
  //       .slice(startIndex, startIndex + this.limit);

  //     this.filteredPosts = [...this.filteredPosts, ...additionalPosts];

  //     // Check if there are more posts to load 2nd
  //     //this.hasMorePosts = this.filteredPosts.length < this.posts.length;
  //     this.hasMorePosts = this.filteredPosts.length < this.posts.length;
  //     this.isLoading = false; // Hide Loader
  //   }, 1000); // Simulate data loading for 1 second
  // }

  // // Function to change post category
  // onCategoryChange(category: string) {
  //   this.selectedCategory = category;
  //   this.filteredPosts = [];
  //   this.hasMorePosts = true;
  //   this.loadMockData(); // Load new posts based on category
  // }
  //---------------------------------------------------------
//}