import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [RouterLink],
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  login() {
    this.router.navigate(['/login']);
  }
}