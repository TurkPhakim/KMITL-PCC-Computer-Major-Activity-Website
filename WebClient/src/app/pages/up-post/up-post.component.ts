import { Component, inject, HostListener, ChangeDetectorRef, AfterViewInit, AfterViewChecked, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-up-post',
  standalone: true,
  imports: [QuillModule, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './up-post.component.html',
  styleUrls: ['./up-post.component.css']
})
export class UpPostComponent implements OnInit, AfterViewInit, AfterViewChecked {
  
  private apiBaseUrl = `${environment.apiBaseUrl}/upload/activity`; // Environment API URL

  //(`${this.apiBaseUrl}/logout`,
  lastScrollTop = 0;
  navbarVisible = true;
  mainImage: File | null = null;
  additionalImages: File[] = [];
  eventDescription: string = '';
  eventForm: FormGroup;

  isEditing = false; // ตรวจสอบว่าเป็นโหมดแก้ไขหรือไม่
  postId: string | null = null; // เก็บ ID ของโพสต์ที่จะแก้ไข
  isLoading = false; // ใช้แสดงสถานะ Loading

  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private ngZone = inject(NgZone);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private postService = inject(PostService);

  quillConfig = {
    modules: {
      toolbar: [
        [{ header: '1' }, { header: '2' }],
        [{ align: [] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link']
      ]
    }
  };

  imagePreviewUrl: string = '';

  // Constructor & Dependency Injection
  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      advisor: ['', Validators.required],
      type: ['event', Validators.required],
      eventDate: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
      if (this.postId) {
        this.isEditing = true;
        this.loadPostData(); // โหลดข้อมูลโพสต์เดิม
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }

  ngAfterViewChecked() {
    // เราจะใช้ `ngAfterViewChecked` เพื่อตรวจสอบการเปลี่ยนแปลงหลังจากการแสดงผลของ view
    if (this.imagePreviewUrl) {
      this.ngZone.run(() => {
        this.cdr.detectChanges();
      });
    }
  }

  // ฟังก์ชันโหลดข้อมูลโพสต์ที่ต้องการแก้ไข
  loadPostData() {
    if (!this.postId) return;
    this.isLoading = true;

    // ดึงข้อมูลโพสต์จาก postService.getPostById(postId)
    this.postService.getPostById(this.postId).subscribe({
      next: (post) => {
        this.eventForm.patchValue({
          title: post.title,
          description: post.description,
          location: post.location,
          advisor: post.lecturer,
          type: post.category,
          eventDate: post.date
        });

        this.imagePreviewUrl = post.coverImage || '';
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading post:', err);
        this.isLoading = false;
      }
    });
  }

  // ฟังก์ชันตรวจจับการเลื่อนหน้าจอ
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.navbarVisible = currentScroll < this.lastScrollTop;
    this.lastScrollTop = Math.max(currentScroll, 0);
  }

  // ฟังก์ชันเลือกรูปภาพหลัก
  onMainImageChange(event: any) {
    const file = event.target.files[0];
    if (file && this.isValidImage(file)) {
      this.mainImage = file;
      this.imagePreviewUrl = URL.createObjectURL(file);

      // ใช้ NgZone เพื่อให้การเปลี่ยนแปลงเกิดขึ้นในโซนของ Angular
      this.ngZone.run(() => {
        setTimeout(() => {
          this.cdr.detectChanges(); // บังคับให้ Angular ตรวจสอบการเปลี่ยนแปลงใหม่
        }, 0);
      });
    } else {
      alert('กรุณาเลือกไฟล์ภาพที่ถูกต้อง');
    }
  }

  // ฟังก์ชันเลือกรูปภาพเพิ่มเติม
  onAdditionalImagesChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const filesArray = Array.from(input.files).slice(0, 3); // จำกัด 3 รูป

      this.ngZone.run(() => {
        setTimeout(() => {
          this.additionalImages = filesArray;
          this.cdr.detectChanges(); // บังคับให้ Angular ตรวจสอบการเปลี่ยนแปลงใหม่
        }, 0);
      });
    }
  }

  isValidImage(file: File): boolean {
    return file.type.startsWith('image/');
  }

  getMainImagePreview(): string | null {
    return this.imagePreviewUrl || null;
  }

  getAdditionalImagePreview(file: File): string {
    return file ? URL.createObjectURL(file) : '';
  }

  trackByFn(index: number, item: File): string {
    return item.name;
  }

  // ฟังก์ชันส่งข้อมูลโพสต์
  submitForm() {
    if (this.eventForm.invalid) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    const formData = new FormData();
    formData.append("title", this.eventForm.get("title")?.value);
    formData.append("description", this.eventForm.get("description")?.value);
    formData.append("location", this.eventForm.get("location")?.value);
    formData.append("advisor", this.eventForm.get("advisor")?.value);
    formData.append("type", this.eventForm.get("type")?.value === "event" ? "1" : "2");
    formData.append("eventDate", this.eventForm.get("eventDate")?.value);

    if (this.mainImage) {
      formData.append("mainImage", this.mainImage);
    } else {
      alert("Cover image is required.");
      return;
    }

    if (!this.isEditing && this.mainImage) {
      formData.append("mainImage", this.mainImage);
    }

    if (this.additionalImages.length > 0) {
      this.additionalImages.forEach((file) => {
        formData.append("additionalImages", file);
      });

      this.isLoading = true;

      if (this.isEditing && this.postId) {
        // กรณีเป็นการแก้ไขโพสต์ที่มีอยู่แล้ว
        this.postService.updatePost(this.postId, formData).subscribe({
          next: () => {
            alert("แก้ไขโพสต์สำเร็จ!");
            this.router.navigate(['/post', this.postId]);
          },
          error: (err) => {
            console.error("เกิดข้อผิดพลาดในการแก้ไขโพสต์:", err);
            alert(`เกิดข้อผิดพลาดในการแก้ไขโพสต์: ${err.message}`);
          },
          complete: () => {
            this.isLoading = false;
          }
        });
      } else {
        // กรณีสร้างโพสต์ใหม่
        this.http.post(`${this.apiBaseUrl}`, formData).subscribe({
          next: () => {
            alert("สร้างโพสต์สำเร็จ!");
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.error("เกิดข้อผิดพลาดในการสร้างโพสต์:", err);
            alert(`เกิดข้อผิดพลาดในการสร้างโพสต์: ${err.message}`);
          },
          complete: () => {
            this.isLoading = false;
          }
        });
      }
    }

    if(this.additionalImages?.length) {
      this.additionalImages.forEach((file: File, index: number) => {
        formData.append(`additionalImages`, file);
      });
    }

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    formData.forEach((value, key) => {
      console.log(key, value);
    });
  
    this.http.post("http://localhost:3000/upload/activity", formData).subscribe(
      (response) => {
        console.log("ส่งข้อมูลสำเร็จ:", response);
        alert("ส่งข้อมูลสำเร็จ!");
      },
      (error) => {
        console.error("เกิดข้อผิดพลาด:", error);
        alert(`เกิดข้อผิดพลาดในการส่งข้อมูล: ${error.message}`);
      }
    );
  }
}