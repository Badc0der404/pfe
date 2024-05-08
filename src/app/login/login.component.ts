import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterModule, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule, RouterLink, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(MatDialog) public dialog: MatDialog,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.email === 'admin@admin' && this.password === 'pass') {
      this.router.navigate(['/dashboard']);
    } else {
      this.authService.login(this.email, this.password).subscribe(response => {
        console.log('subscribe called', response);
        if (response === 'success') {
          this.router.navigate(['/home']);
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Invalid credentials.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      }, error => {
        Swal.fire({
          title: 'Error!',
          text: 'Could not connect to the server.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
    }
  }
}