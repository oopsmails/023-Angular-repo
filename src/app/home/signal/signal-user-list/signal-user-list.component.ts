import { Component, computed, effect, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModifiedUser, User } from '../../../shared/models/user';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signal-user-list.component.html',
  styleUrl: './signal-user-list.component.scss'
  ,
})
export class SignalUserListComponent {

  static LOCAL_STORAGE_NAME_SEARCH_STRING = 'searchString';

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

  logger = effect(() => {
    // can see it is stored in local storage
    localStorage.setItem(SignalUserListComponent.LOCAL_STORAGE_NAME_SEARCH_STRING, this.query())
  })

  protected filteredUsers = computed(() =>
    this.userList().filter(({ displayName }) =>
      // displayName.startsWith(this.query())
      displayName?.toUpperCase().includes(this.query().toUpperCase())
    )
  );

  // query = signal('');
  query = signal(localStorage.getItem(SignalUserListComponent.LOCAL_STORAGE_NAME_SEARCH_STRING) || ''); // if keep query after refresh

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
