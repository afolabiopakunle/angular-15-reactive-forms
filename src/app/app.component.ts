import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      userData: new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),
      gender: new FormControl(1),
      hobbies: new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.signUpForm.value)
  }

  createHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signUpForm.get('hobbies') as FormArray).push(control)
  }

  get hubbies(): FormArray {
    return this.signUpForm.controls["hubbies"] as FormArray;
  }
}
