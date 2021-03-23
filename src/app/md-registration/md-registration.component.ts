import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-md-registration',
  templateUrl: './md-registration.component.html',
  styleUrls: ['./md-registration.component.css']
})
export class MdRegistrationComponent {
  constructor(private formBuilder: FormBuilder) {
  }

  myArrayData = []
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required, Validators.pattern('[A-Z]*[a-z]+')]),
      state: new FormControl('', [Validators.required, Validators.pattern('[A-Z\\s]*[a-z\\s]+')]),
      postalCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6,6}$')])
    })
  })



  submitData() {
    //console.log(this.userForm.value)
    this.myArrayData.push(this.userForm.value)
  }
}
