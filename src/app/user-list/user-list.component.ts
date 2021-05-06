import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  result: any = [];
  constructor(private service: ServiceService, private _route: Router) { }
  ngOnInit(): void {
    this.getDetails();
  }
  getDetails() {
    this.service.get_Api().subscribe(res => {
      this.result = res
    })
  }
  userDetails(userid: any) {
    this._route.navigate(['/userProfile', userid]);
  }
}