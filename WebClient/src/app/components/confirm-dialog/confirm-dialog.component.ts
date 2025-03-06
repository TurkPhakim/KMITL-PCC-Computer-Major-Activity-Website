import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-confirm-dialog',
  imports: [CommonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  @Input() message: string = 'คุณต้องการดำเนินการนี้ใช่หรือไม่?';
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm(): void {
    this.confirm.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
  // ------------------------------------------------------------
  // constructor(
  //   public dialogRef: MatDialogRef<DeleteConfirmComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any
  // ) {}
  // ------------------------------------------------------------
}