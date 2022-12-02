import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user!: any
  id!: number

  constructor(private router:ActivatedRoute ,private userSrv: UserService) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = +params['id']
      this.user = this.userSrv.getUser(this.id)
    })
  }

}
