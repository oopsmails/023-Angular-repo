export interface User {
  id: string;
  name?: string;
  age?: number;
  email?: string;
  lastName?: string;
  username?: string;
}

export interface ModifiedUser {
  id: string;
  displayName?: string;
  username?: string;
}
