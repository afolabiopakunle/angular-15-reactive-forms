import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = [
    { value: 1, title: 'Male' },
    { value: 2, title: 'Female' },
    { value: 3, title: 'Undisclosed' },
  ];
  constructor() {}

  ngOnInit() {}
}
