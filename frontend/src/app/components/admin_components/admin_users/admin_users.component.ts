import {Component} from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";



@Component({
  selector: 'app-admin-users',
  templateUrl: './admin_users.component.html',
  styleUrls: ['./admin_users.component.scss']
})
export class AdminUsersComponent {

  public users: User [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  headElements = ['id', 'first_name', 'last_name', 'role', 'e-mail', 'password', 'phone',
                  'is_subscribe', 'comment', 'edit', 'delete'];

  getUsers(){
     this.userService.getAllUsers()
       .subscribe(data => this.users = data);
  }
}
