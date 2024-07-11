import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../models/user';

export interface SearchConfig {
  userName?: string;
  resultLimit?: number;
}

@Injectable({ providedIn: 'root' })
export class UserSearchService {
  #httpClient = inject(HttpClient);

  findUsers({ userName = '', resultLimit = 5 }: SearchConfig) {
    return this.#httpClient.get<User[]>(
      `https://jsonplaceholder.typicode.com/users?name_like=^${userName}&_limit=${resultLimit}`
    );
  }
}
