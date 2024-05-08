// interview.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-interview',
  standalone: true,
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css'],
  imports: [RouterLink],
})
export class InterviewComponent implements OnInit {
form: any;

  constructor() { }

  ngOnInit(): void {
  }

  scheduleInterview(formData: any) {
    // Logic to handle scheduling a new interview
    console.log(formData);
  }
}
