import { Component, computed, effect, model, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../shared/models/user';


export interface QuestionTypeInterface {
  question: string;
}

@Component({
  selector: 'app-signal-basic',
  standalone: true,
  templateUrl: './signal-basic.component.html',
  imports: [FormsModule],
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

  quantity1: Signal<number> = model<number>(1);
  quantity2 = signal<number>(1);

  onQuantitySelected(qty: number) {
    this.quantity2.set(qty);
  }

  licenseKey: WritableSignal<string> = signal('');
  isLicenseValid: WritableSignal<boolean> = signal(false);
  updatedLicenseKey = signal('');
  protected readonly viewMode = computed(() => ({
    licenseKey: this.licenseKey(),
    isLicenseValid: this.isLicenseValid()
  }));
  get vm(): ReturnType<typeof this.viewMode> {
    return this.viewMode();
  }
  onLicenseKeyEntry(event: Event) {
    const updatedLicenseKey = (event.target as HTMLInputElement).value + ' UPDATED!';
    this.updatedLicenseKey.set(updatedLicenseKey);
  }

  myQuestion = signal<QuestionTypeInterface>({
    question: '',
  })

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
