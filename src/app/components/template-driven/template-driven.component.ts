import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [ FormsModule, NgIf ],
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  userObj = {
    name: '',
    mobileNo: '',
    gender: ''
  }
  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    console.log('submitted...', form.value);
  }
}
