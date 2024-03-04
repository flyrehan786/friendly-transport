import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  
  onSubmit(e) {
    const firstName = e.firstname;
    const lastName = e.lastname;
    const email = e.email;
    const username = e.username;
    const password = e.password;
    const isAdmin = e.admin;

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      username,
      password,
      is_admin: isAdmin
    };

    console.log('Payload: User Registration::');
    console.log(payload);
  }
}
