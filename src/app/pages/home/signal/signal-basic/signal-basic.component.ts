import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { User } from '../../../../shared/models/user';


@Component({
  selector: 'app-signal-basic',
  standalone: true,
  templateUrl: './signal-basic.component.html',
  styleUrl: './signal-basic.component.scss'
  ,
})
export class SignalBasicComponent implements OnInit {
  title = signal('');
  users = signal<User[]>([]);
  titleChangeEffect = effect(() => {
    console.log('titleChangeEffect', this.title());
  });
  usersTotal = computed(() => this.users().length);

  ngOnInit(): void {
    setTimeout(() => {
      // this.users.set([{ id: '1', name: 'Foo' }]);
      this.users.update((prevUsers) => [
        ...prevUsers,
        { id: '1', name: 'Foo' },
      ]);
      // this.users.mutate((currUsers: User[]) =>
      //   currUsers.push({ id: '1', name: 'Foo' })
      // );
      console.log(this.users());
    }, 2000);
  }

  changeTitle(event: Event) {
    const title = (event.target as HTMLInputElement).value;

    this.title.set(title);
  }
}
