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

  title = 'base';
  eventDescription: string = '';
  eventForm: FormGroup;
  private http = inject(HttpClient);

  // กำหนดค่า Quill modules และ toolbar เพื่อปิดฟังก์ชันการแนบรูปและฟอนต์
  quillConfig = {
    modules: {
      toolbar: [
        [{ 'header': '1'}, { 'header': '2'}],  // ไม่เลือก font
        [{ 'align': [] }],
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link']  // ไม่ใช้ image
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

  submitForm() {
    if (this.eventForm.invalid) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    const formData = this.eventForm.value;
    if (formData.image) {
      const reader = new FileReader();
      reader.readAsDataURL(formData.image);
      reader.onload = () => {
        formData.image = reader.result as string;
        this.sendDataToAPI(formData);
      };
    } else {
      this.sendDataToAPI(formData);
    }
  }

  sendDataToAPI(formData: any) {
    this.http.post('https://your-api-url.com/events', formData, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(
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

  selectedFiles: File[] = [];

  onFileChange(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedFiles = Array.from(files); // แปลง FileList เป็น Array
    }
  }

  getImagePreview(file: File): string {
    return URL.createObjectURL(file); // สร้าง URL แสดงภาพตัวอย่าง
  }
}
