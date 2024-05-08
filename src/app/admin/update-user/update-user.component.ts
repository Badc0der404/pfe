// update-user.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '/Users/katto/tests/test/src/app/models/models/user.model';
import { UserService } from '/Users/katto/tests/test/src/app/services/user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-update-user',
  standalone: true,
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  imports: [FormsModule]
})
export class UpdateUserComponent {
  @Input()
  user: User = new User;
  @Output() userUpdated = new EventEmitter<User>();

  constructor(private userService: UserService) { }

  updateUser() {
    this.userService.updateUser(this.user.id, this.user)
      .subscribe(
        (updatedUser: User) => {
          this.userUpdated.emit(updatedUser);
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
  }
}