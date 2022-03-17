import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  registerMode = false;



  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  logout(){
    this.accountService.logout();
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe(user => {
    }, error => {
      console.log(error)
    })
  }

}