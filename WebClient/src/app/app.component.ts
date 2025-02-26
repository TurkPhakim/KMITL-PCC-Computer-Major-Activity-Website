import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpPostComponent } from "./up-post/up-post.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'base';
}
