import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };
  constructor(private authService: AuthService, private router: Router) { }
  onSubmit() {
    this.authService.register(this.model.firstname, this.model.lastname, this.model.email, this.model.password).subscribe({
      next: (response) => {
        Swal.fire({
          title: 'Success!',
          text: 'Register Successful. Please verify your email.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigate(['/login']);
      },
      error: (error) => {
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  }
}