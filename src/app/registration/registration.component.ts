import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  
  name = '';
  email = '';
  password = '';

  constructor(private userService: UserService) {}

  register(): void {
    const isRegistered = this.userService.registerUser(this.name, this.email, this.password);
    if (isRegistered) {
      
      console.log('Реєстрація пройшла успішно');
    } else {
      
      console.log('Користувач з таким email уже існує');
    }
  }
}
