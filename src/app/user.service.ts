import { Injectable } from '@angular/core';
import { User } from './user.model';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { RegistrationModalComponent } from './registration-modal/registration-modal.component';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: User[] = [
    {
      id: '1',
      name: 'admin',
      email: 'admin@gmail.com',
      password: 'q'
    },

  ];
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();


  getCurrentUser(): User | null {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  }


  name = '';
  constructor() {
  }

  registerUser(name: string, email: string, password: string): boolean {
    const existingUser = this.users.find((user) => user.email === email);
    if (existingUser) {
      alert("Користувач з таким email уже існує");
      return false;

    }
    const newUserId = this.generateUniqueId();
    const newUser: User = {
      id: uuidv4(),
      name,
      email,
      password,

    };

    this.users.push(newUser);
    return true;
  }

  private generateUniqueId() {

    const uniqueId: string = uuidv4();

  }

  loginUser(email: string, password: string,): User | null {
    const user = this.users.find((user) => user.email === email && user.password === password);
    return user || null;

  }





  logout(): void {

    this.currentUserSubject.next(null);
  }

}
