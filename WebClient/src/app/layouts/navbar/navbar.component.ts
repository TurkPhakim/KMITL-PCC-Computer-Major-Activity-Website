import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  closeNavbar() {
    this.close.emit();
  }
}
