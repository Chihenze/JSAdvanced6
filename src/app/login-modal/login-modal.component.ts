import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  email = '';
  password = '';
  name = '';

  constructor(private userService: UserService, public AppComponent: AppComponent) { }

  login(): void {
    const user = this.userService.loginUser(this.email, this.password,);

    if (user) {
      this.close();
      this.AppComponent.isLoggedIn = true;
      this.AppComponent.CloseCopy();
      this.email = '';
      this.password = '';
      if (this.email = 'admin@gmail.com') {
        this.AppComponent.loggedInUsername = 'admin';
        this.userService.name = 'admin';
      }

    }

    else {
      alert('Неправильний email або пароль');
    }

    this.close();
  }

  close(): void {

    const modal = document.querySelector('.modal') as HTMLElement;
    modal.style.display = 'none';
    this.email = '';
    this.password = '';
  }
}
