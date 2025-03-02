import { Component, inject, HostListener } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-up-post',
  imports: [QuillModule, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './up-post.component.html',
  styleUrls: ['./up-post.component.css']
})
export class UpPostComponent {
  lastScrollTop = 0;
  navbarVisible = true;
  selectedFiles: File[] = [];  // สำหรับเก็บไฟล์ที่อัปโหลด
  eventDescription: string = '';
  eventForm: FormGroup;
  private http = inject(HttpClient);

  // กำหนด tools bar Quill modules
  quillConfig = {
    modules: {
      toolbar: [
        [{ 'header': '1'}, { 'header': '2'}], 
        [{ 'align': [] }],
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link'] 
      ]
    }
  };

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      advisor: ['', Validators.required],
      type: ['event', Validators.required],
      image: [null]
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      this.navbarVisible = false;
    } else {
      this.navbarVisible = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  submitForm() {
    if (this.eventForm.invalid) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    const formData = new FormData(); 

    formData.append('title', this.eventForm.get('title')?.value);
    formData.append('description', this.eventForm.get('description')?.value);
    formData.append('location', this.eventForm.get('location')?.value);
    formData.append('advisor', this.eventForm.get('advisor')?.value);
    formData.append('type', this.eventForm.get('type')?.value);

    // ถ้ามีไฟล์ในฟอร์ม (สำหรับอัปโหลดรูปหลัก)
    if (this.selectedFiles.length > 0) {
      this.selectedFiles.forEach(file => {
        formData.append('images[]', file, file.name); 
      });
    }

    // ส่งข้อมูลไปยัง API
    this.sendDataToAPI(formData);
  }

  sendDataToAPI(formData: FormData) {
    this.http.post('https:บลาๆๆ', formData).subscribe(
      response => {
        console.log('ส่งข้อมูลสำเร็จ:', response);
        alert('ส่งข้อมูลสำเร็จ!');
      },
      error => {
        console.error('เกิดข้อผิดพลาด:', error);
        alert('เกิดข้อผิดพลาดในการส่งข้อมูล');
      }
    );
  }

  // ฟังก์ชันสำหรับจัดการไฟล์ที่เลือก
  onFileChange(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedFiles = Array.from(files); 
    }
  }

  // ฟังก์ชันแสดงตัวอย่างภาพที่อัปโหลด
  getImagePreview(file: File): string {
    return URL.createObjectURL(file); 
  }
}