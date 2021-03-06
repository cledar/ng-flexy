import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'demo-models-users',
  templateUrl: './users.component.html'
})
export class DemoModelsUsersComponent implements OnInit {
  @Input() id: string;

  constructor(private usersService: UsersService) {}

  users$: Observable<User[]>;

  ngOnInit() {
    this.users$ = this.usersService.all();
  }
}
