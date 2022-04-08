import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}