import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, shareReplay, startWith, switchMap, tap } from 'rxjs';
import { UserSearchService } from '../../shared/services/user-search.service';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss'
})
export class UserSearchComponent {
  searchConfigForm = new FormGroup({
    userName: new FormControl('', { nonNullable: true }),
    resultLimit: new FormControl(3, { nonNullable: true }),
  });

  searchConfig$ = this.searchConfigForm.valueChanges.pipe(
    debounceTime(300),
    // distinctUntilKeyChanged('userName'), // NOT used, only response to userName changes
    distinctUntilChanged( // Only trigger if form values change. Note: will NOT trigger if re-type same char after backspace, e.g, type 'cl', then backspace and type 'l' again, quick, within 300 of course
      (prev, curr) => prev?.userName === curr?.userName && prev?.resultLimit === curr?.resultLimit
    ),
    tap(config => console.log('tap 1, config: ', config)),
    map((config) => {
      const trimmedConfig = {
        ...config,
        userName: config.userName?.trim() || '',
      };
      return trimmedConfig;
    }),
    tap((trimmedConfig) => {
      console.log('tap 2, trimmedConfig: ', trimmedConfig);
      localStorage.setItem('searchConfig', JSON.stringify(trimmedConfig))
    })
  );

  usersService = inject(UserSearchService);
  users$ = this.searchConfig$.pipe(
    startWith(this.searchConfigForm.value),
    switchMap((searchConfig) => {
      console.log('tap 3, calling usersService .... with searchConfig: ', searchConfig);
      return this.usersService.findUsers(searchConfig);
    }),
    shareReplay(1)
  )

}
