import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-registration',
  templateUrl: './td-registration.component.html',
  styleUrls: ['./td-registration.component.css']
})
export class TdRegistrationComponent {

  submitData(formData: any) {
    console.log(formData)

  }
}
