import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { User } from './../../../models/models/user.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-manag',
  standalone: true,
  imports: [RouterLink, NgFor, FormsModule],
  templateUrl: './user-manag.component.html',
  styleUrls: ['./user-manag.component.css']
})
export class UserManagComponent {
  users: User[] = [];
  selectedUser: User | null = null;
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers()
      .subscribe(
        (users: User[]) => {
          this.users = users;
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
  }
  addUser() {
    const newUser: User = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    };
  
    this.userService.addUser(newUser)
      .subscribe(
        (user: User) => {
          // Add the new user to the local array
          this.users.push(user);
          console.log('User added successfully');
        },
        (error) => {
          console.error('Error adding user:', error);
        }
      );
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        () => {
          // Remove the deleted user from the local array
          this.users = this.users.filter(user => user.id !== id);
          console.log('User deleted successfully');
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
  }

  updateUser(user: User) {
    this.userService.updateUser(user.id, user)
      .subscribe(
        (updatedUser: User) => {
          // Find the index of the updated user in the local array
          const index = this.users.findIndex(u => u.id === updatedUser.id);
          if (index !== -1) {
            // Update the user in the local array
            this.users[index] = updatedUser;
            console.log('User updated successfully');
          } else {
            console.error('User not found in the local array');
          }
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
  }

  onSelectUser(user: User) {
    this.selectedUser = user;
  }
}
