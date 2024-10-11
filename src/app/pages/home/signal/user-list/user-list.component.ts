import { Component, computed, effect, input, signal } from '@angular/core';
import { ModifiedUser, User } from '../../../../shared/models/user';


@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
  ,
})
export class UserListComponent {

  userList = input.required({
    alias: 'users',
    transform: concatUserNames
  });

  constructor() {
    effect(() => {
      // the way we track changes in signals
      console.log('New query: ', this.query());
      console.log('New Input value is: ', this.userList());
    })
  }

  protected filteredUsers = computed(() =>
    this.userList().filter(({ displayName }) =>
      // displayName.startsWith(this.query())
      displayName?.toUpperCase().includes(this.query().toUpperCase())
    )
  );

  private query = signal('');

  updateQuery(e: Event) {
    this.query.set((e.target as HTMLInputElement).value);
  }
}

function concatUserNames(users: User[]): ModifiedUser[] {
  return users.map(({ name, lastName, ...user }) => ({
    ...user,
    displayName: `${name} ${lastName}`,
  }));
}
