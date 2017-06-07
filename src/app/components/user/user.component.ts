import { Component, OnInit } from '@angular/core';
import { UserService } from './user.serivce';
import { User } from './user.model';
@Component({
  templateUrl: './user.component.html',
  providers:[UserService]
})
export class UserComponent implements OnInit {

  USERS: User[] = [];
  constructor(private _userService: UserService) {
    var data = _userService.getUser();
    console.log(data)
  }
  ngOnInit(){}
}
