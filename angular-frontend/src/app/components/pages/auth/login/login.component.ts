import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  onSubmit(e) {
    console.log(e);
    const username = e.username;
    const password = e.password;

    const payload = { username, password };
    console.log(payload);
  }
}
