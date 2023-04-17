import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  signUpForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(1)
    })
  }

  onSubmit() {
    console.log(this.signUpForm)
  }

}
