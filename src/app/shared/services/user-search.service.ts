import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { User } from '../models/user';

export interface SearchConfig {
  userName?: string;
  resultLimit?: number;
}

@Injectable({ providedIn: 'root' })
export class UserSearchService {
  httpClient = inject(HttpClient);

  private usersUrl = 'data/users.data.json';  // Path to your data.json file
  private users$!: ReplaySubject<User[]>;  // ReplaySubject to cache the data


  getAllUsers(): Observable<User[]> {
    // return (
    //   this.#httpClient.get('data/users.data.json') as Observable<User[]>
    // ).pipe(
    //   tap((items: User[]) => console.log('getAllUsers result.size: ', (items && items.length) || '0'))
    // );

    // Check if the users$ ReplaySubject is already initialized
    if (!this.users$) {
      this.users$ = new ReplaySubject(1);  // Buffer the last emitted value
      this.httpClient.get<User[]>(this.usersUrl).pipe(
        tap(users => {
          console.log('getAllUsers result.size: ', (users && users.length) || '0')
          this.users$.next(users)
        })  // Cache the data in ReplaySubject
      ).subscribe();
    }

    return this.users$.asObservable();  // Return the cached data as an Observable
  }

  findUsers(searchConfig: SearchConfig) {
    return this.getAllUsers().pipe(
      map(users => {
        // Filter by name if provided
        let filteredUsers = users;
        if (searchConfig.userName) {
          filteredUsers = filteredUsers.filter(user =>
            user.name?.toLowerCase().includes(searchConfig.userName!.toLowerCase())
          );
        }

        // Apply limit if provided
        if (searchConfig.resultLimit) {
          filteredUsers = filteredUsers.slice(0, searchConfig.resultLimit);
        }

        return filteredUsers;
      })
    );
  }

  findUsersHttp({ userName = '', resultLimit = 5 }: SearchConfig): Observable<User[]> {
    return this.httpClient.get<User[]>(
      `https://jsonplaceholder.typicode.com/users?name_like=^${userName}&_limit=${resultLimit}`
    );
  }
}
