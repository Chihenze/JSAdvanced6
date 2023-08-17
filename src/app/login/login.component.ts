import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';

  
  constructor(public userService: UserService ,public AppComponent: AppComponent) {}

  loginUser(): void {
    const user = this.userService.loginUser(this.username, this.password);
    if (user) {

      this.AppComponent.loggedInUsername = this.username;
    } else {
      
    }
  }
}
