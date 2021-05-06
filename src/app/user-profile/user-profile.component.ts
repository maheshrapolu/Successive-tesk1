import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id: any;
  response: any;
  constructor(private Data: ServiceService, private ActivatedRouter: ActivatedRoute) { }
  ngOnInit(): void {
    this.dataUserId();
  }
  dataUserId() {
    this.id = this.ActivatedRouter.snapshot.params['id']
    this.Data.get_Id(this.id).subscribe(res => {
      this.response = Object.values(res)[0];
      console.log(this.response, 'bbbbbbbbbbbbbb');
    })
  }
}