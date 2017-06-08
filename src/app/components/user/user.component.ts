import { Component, OnInit } from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { User } from './shared/user.model';
import { UserService } from './shared/user.serivce';

@Component({
  templateUrl: './user.component.html',
  providers:[UserService]
})
export class UserComponent implements OnInit {

  users: User[] = [];
  errorMessage: string;

  constructor(private _userService: UserService) {
    // this.getUsers();
    // console.log(this.errorMessage)
  }

  getUsers(){
    this._userService.getUsers().subscribe(
      data => {
        this.users = data;
        console.log(data)
      },
      error => {
        this.errorMessage = <any>error;
      }
    )
  }

  ngOnInit(){}

}
