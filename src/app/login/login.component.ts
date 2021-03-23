import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }
  username: string
  password: string
  userForm: any;
  login() {
    if (this.username == "Ananya" && this.password == "Ananya@123") {
      console.log("hi")
      // window.location.href= '/pass';
      this.router.navigate(['/Home']);
    }
    else {
      alert("Invalid User")
    }
  }

}
