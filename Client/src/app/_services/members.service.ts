import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl + 'users/';

  constructor(private http: HttpClient) { }

  getMember(id: number) {
    return this.http.get<Member>(this.baseUrl + id);
  }
}