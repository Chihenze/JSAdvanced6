import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegistrationModalComponent } from './registration-modal/registration-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BlogModalComponent } from './blog-modal/blog-modal.component';
import { AddBlogModalComponent } from './add-blog-modal/add-blog-modal.component';
import { EditBlogModalComponent } from './edit-blog-modal/edit-blog-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    RegistrationComponent,
    LoginComponent,
    LoginModalComponent,
    RegistrationModalComponent,
    BlogModalComponent,
    AddBlogModalComponent,
    EditBlogModalComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
    
  ],
  providers: [NgbModule,AddBlogModalComponent,NgbActiveModal,],
  bootstrap: [AppComponent]
})
export class AppModule { }
