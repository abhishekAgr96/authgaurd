import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName:string;
password:string;
  constructor() { }
  onSubmit(){
    console.log("submited",this.userName,this.password);
    localStorage.setItem("userName",this.userName);
    localStorage.setItem("password",this.password);
  }

  ngOnInit() {
  }

}
