import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm = new FormGroup({
    fullName: new FormControl('', 
      [
        Validators.required, 
        Validators.minLength(5), 
        Validators.maxLength(20), 
        Validators.pattern('[a-zA-z ]*')
      ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(11),
      Validators.pattern('[0-9]*')
    ]),
    gender: new FormControl('', Validators.required)

  })
  ngOnInit() {
  }

  onSubmit() {
    if(this.userForm.invalid) {
      return;
    }
    console.log(this.userForm.value);
  }
}
