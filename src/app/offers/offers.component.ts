import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  constructor(private router: Router, private http: HttpClient) {}

  apply() {
    Swal.fire({
      title: 'Upload your CV',
      html: `
        <input id="file" type="file" accept=".pdf">
        <small id="fileHelp" class="form-text text-muted">Only PDF files are accepted.</small>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Upload',
      cancelButtonText: 'Exit',
      preConfirm: () => {
        let fileInput = document.getElementById('file') as HTMLInputElement;
        let file = fileInput?.files?.[0];
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          return this.http.post<{ score: number }>('http://localhost:8001/check-resume', formData).toPromise()
           .then(response => {
              if (response && response.score > 50) {
                this.router.navigate(['/quiz']);
              } else {
                Swal.fire({
                  title: 'Error!',
                  text: 'Your score is too low.',
                  icon: 'error',
                  confirmButtonText: 'OK'
                });
              }
            })
           .catch(error => {
              Swal.fire({
                title: 'Error!',
                text: 'Could not connect to the server.',
                icon: 'error',
                confirmButtonText: 'OK'
              });
            });
        } else {
          Swal.showValidationMessage('Please select a PDF file');
        }
        return null;
      }
    });
  }
}