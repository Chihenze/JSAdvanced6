import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-add-blog-modal',
  templateUrl: './add-blog-modal.component.html',
  styleUrls: ['./add-blog-modal.component.scss']
})
export class AddBlogModalComponent {
  @Output() blogAdded = new EventEmitter<void>();

  blogForm: FormGroup;


  postedBy = '';


  constructor(private formBuilder: FormBuilder, private blogService: BlogService, public activeModal: NgbActiveModal, public userService: UserService) {
    this.postedBy = this.userService.name;

    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  addBlog() {
    if (this.blogForm.valid) {

      const newBlog = {
        id:  uuidv4(),
        postedBy: this.postedBy,
        title: this.blogForm.value.title,
        text: this.blogForm.value.text,
        date: new Date()


      };
      this.blogService.addBlog(newBlog).subscribe(() => {
        this.blogAdded.emit();
        this.blogForm.reset();
      });
      this.closeModal();
    }
  }
  closeModal() {
    this.activeModal.close();
  }

}
