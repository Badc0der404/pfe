import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgetpass',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.css'
})

export class ForgetpassComponent {
[x: string]: any;
  resetClicked = false;
  model = { email: '' };
  
  resetPassword() {
    if (!this.model.email || !this.model.email.includes('@')) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please provide a valid email!',
      });
      return;
  };
    this.resetClicked = true;

  }
}
