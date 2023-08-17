import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';
import { BlogService } from './blog.service'
import { AddBlogModalComponent } from './add-blog-modal/add-blog-modal.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Blog } from './blog.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditBlogModalComponent } from './edit-blog-modal/edit-blog-modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(AddBlogModalComponent)

  title = 'Homework';
  blogs: Blog[] = [

  ];
  private blogsSubject = new BehaviorSubject<Blog[]>([]);

  @Input() blogId!: string;

  isLoggedIn = false;
  loggedInUsername: string = '';
  Email: string = '';

  // AdName:string = 'admin';
  admin: boolean = false;
  currentUser: any;

  selectedId = '1';

  newBlogTitle: string = '';
  newBlogText: string = '';



  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private UserService: UserService, private blogService: BlogService, private modalService: NgbModal, public addBlogModalComponent: AddBlogModalComponent,) {

  }

  getCurrentusername() {
    const currentName = this.loggedInUsername;
    return currentName;
  }

  isAdmin = (): boolean => {
    const currentUser = this.UserService.getCurrentUser();
    return true;
  }
  ngOnInit(): void {


    this.UserService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    this.UserService.currentUser$.subscribe(user => {
      this.currentUser = user?.name || null;
      this.isLoggedIn = !!user;
      this.isAdmin = this.isAdmin;
      this.loadBlogs();
    });

    if (status) {
      this.loadBlogs();
    }
  }



  loadBlogs() {
    this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
      this.blogs = blogs;
    });
  }

  canEditOrDelete(postedBy: string): boolean {


    if (this.loggedInUsername === postedBy) {
      return true;
    }
    else if (this.Email === 'admin@gmail.com') {
      this.OpenBtn();
      return true;

    }
    else if (this.loggedInUsername === 'admin') {
      return true;
    }
    return false;
  }



  openEditModal(blog: Blog): void {
    const modalRef = this.modalService.open(EditBlogModalComponent);
    modalRef.componentInstance.blog = blog;
  }



  deleteBlog(id: string) {

    const index = this.blogs.findIndex(blog => blog.id === id);
    if (index !== -1) {
      this.blogs.splice(index, 1);
      this.blogsSubject.next(this.blogs.slice());
    }
  }



  openAddBlogModal() {
    const modalRef = this.modalService.open(AddBlogModalComponent, { centered: true });
    modalRef.result.then(
      () => {

      },
      () => { }
    );
  }

  onLogout(): void {
    this.isLoggedIn = false;
    this.loggedInUsername = '';
    this.UserService.logout();
    this.OpenCopy();
    // this.closeBtn();
  }

  CloseCopy() {
    const Close = document.querySelector('.CloseCoppy') as HTMLElement;
    Close.style.display = 'none';
  }
  OpenCopy() {
    const Close = document.querySelector('.CloseCoppy') as HTMLElement;
    Close.style.display = 'block';
  }
  closeBtn() {
    const closeBtn = document.querySelector('.closeBtn') as HTMLElement;
    closeBtn.style.display = 'none';
  }
  OpenBtn() {
    const closeBtn = document.querySelector('.closeBtn') as HTMLElement;
    closeBtn.style.display = 'flex';
  }


  openModal(): void {
    const modal = document.querySelector('.modal') as HTMLElement;
    modal.style.display = 'flex';
  }

  openRegistrationModal(): void {
    const registrationModal = document.querySelectorAll('.modal')[2] as HTMLElement;
    registrationModal.style.display = 'flex';
  }

}
