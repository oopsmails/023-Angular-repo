import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { USERS_DATA } from '../data/users.data';
import { User } from '../models/user';


@Injectable({ providedIn: 'root' })
export class UserDataService {
  public currentLocale$: Subject<string> = new Subject();

  currentLanguage: string = 'EN';

  getUserData(delayInMs?: number): Observable<User[]> {
    return of(USERS_DATA);
  }
}
