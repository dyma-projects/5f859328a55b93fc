import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);
  constructor() {}

  addUser(user: string): void {
    const updatedUsers = [...this.users.value, user];
    this.users.next(updatedUsers);
  }
}
