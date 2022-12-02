import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User[] = [
    {
      id: 1,
      email: 'angelo@admin.com',
      nome: 'Angelo',
      role: 'admin'
    },
    {
      id: 2,
      email: 'marco@user.com',
      nome: 'Marco',
      role: 'user'
    },
    {
      id: 3,
      email: 'luca@user.com',
      nome: 'Luca',
      role: 'user'
    },
    {
      id: 4,
      email: 'andrea@user.com',
      nome: 'Andrea',
      role: 'user'
    },
    {
      id: 5,
      email: 'giovanni@user.com',
      nome: 'Giovanni',
      role: 'user'
    }
  ]


  constructor() { }

  getAllUsers() {
    return this.user
  }

  getUser(id: number) {
    return this.user.find(user => user.id == id)
  }
}
