import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  member: Member;
  memberId: number;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private memberService: MembersService) {
    this.memberId = this.route.snapshot.paramMap.get('memberId') as unknown as number;
  }

  ngOnInit(): void {
  }

  loadMember(memberId) {
    this.memberService.getMember(memberId).subscribe(member => {
      this.member = member;
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}