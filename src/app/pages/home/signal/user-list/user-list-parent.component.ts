import { AsyncPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../../../shared/models/user';
import { UserListComponent } from './user-list.component';

@Component({
  selector: 'app-user-list-parent',
  standalone: true,
  imports: [RouterModule, UserListComponent, AsyncPipe, NgStyle],
  templateUrl: './user-list-parent.component.html',
  styleUrl: './user-list-parent.component.scss'
})
export class UserListParentComponent {
  users: User[] = [
    { id: "1", name: 'Michael', lastName: 'Scott', username: 'michael.scott' },
    { id: "2", name: 'Dwight', lastName: 'Schrute', username: 'dwight.schrute' },
    { id: "3", name: 'Angela', lastName: 'Martin', username: 'angela.martin' },
    { id: "4", name: 'Jim', lastName: 'Halpert', username: 'jim.halpert' },
  ];

  addUser() {
    this.users = [
      {
        id: "5",
        name: 'Andy',
        lastName: 'Bernard',
        username: 'andy.bernard',
      },
      ...this.users,
    ];
    console.log('Current Users', this.users);
  }

}

