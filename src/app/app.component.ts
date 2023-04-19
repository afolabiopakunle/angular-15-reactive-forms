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

  forbiddenNames = ['Siaka', 'Demurin']
  signUpForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('', [Validators.required, this.forbiddenNamesValidator.bind(this)]),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),
      gender: new FormControl(1),
      hobbies: new FormArray([
        this.newHobby()
      ]),
    });

  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  newHobby() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
    })
  }

  addHobby() {
    (this.signUpForm.get('hobbies') as FormArray).push(this.newHobby());;
  }

  removeHobby(i) {
    (this.signUpForm.get('hobbies') as FormArray).removeAt(i)
  }

  get hubbyArray() {
    return this.signUpForm.get('hobbies') as FormArray
  }

  forbiddenNamesValidator(input): {[s: string]: boolean} {
    if(this.forbiddenNames.indexOf(input) !== 1) {
      return {'This is a forbidden name': true}
    } else {
      return null
    }
  }
}
