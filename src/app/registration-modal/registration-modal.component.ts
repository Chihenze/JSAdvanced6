import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss']
})
export class RegistrationModalComponent implements OnInit {
  name = '';
  email = '';
  password = '';


  constructor(private userService: UserService, private AppComponent: AppComponent) { }


  ngOnInit(): void { }

  register(): void {
    const isRegistered = this.userService.registerUser(this.name, this.email, this.password);
    this.AppComponent.loggedInUsername = this.name;
    this.AppComponent.Email = this.email;
    this.userService.name = this.name;
    
    if (isRegistered) {
      
      this.name = '';
      this.email = '';
      this.password = '';
      this.close();
      this.AppComponent.CloseCopy();
      this.AppComponent.isLoggedIn = true;
    }
    else {
      
      alert('Користувач з таким email уже існує');
    }

  }


  close(): void {
    
    const registrationModal = document.querySelectorAll('.modal')[2] as HTMLElement;
    registrationModal.style.display = 'none';
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
