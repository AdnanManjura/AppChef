import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl("/categories");
      console.log(response);
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }
 
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe(user => {
    }, error => {
      console.log(error)
    })
  }

}