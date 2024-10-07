import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model'; // Asegúrate de tener un modelo User definido

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html'
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  registerUser(user: User) {
    this.userService.registerUser(user).subscribe(newUser => {
      this.users.push(newUser);
    });
  }

  updateUser(user: User) {
    this.userService.updateUser(user).subscribe(updatedUser => {
      // Actualiza el usuario en la lista
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }
}
