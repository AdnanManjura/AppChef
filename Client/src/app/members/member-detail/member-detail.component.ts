import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member;
  mId: number;
  
  constructor(private memberService: MembersService, private route: ActivatedRoute) {
    this.mId = this.route.snapshot.paramMap.get("memberId") as unknown as number
   }

  ngOnInit(): void {
    this.loadMember(this.mId);
  }

  loadMember(mId) {
    this.memberService.getMember(mId).subscribe(member => {
      this.member = member;
    })
  }

}