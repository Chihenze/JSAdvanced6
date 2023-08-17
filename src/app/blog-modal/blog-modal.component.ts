import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../blog.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.scss']
})
export class BlogModalComponent {
  blogForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder,) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  saveBlog() {
    if (this.blogForm.valid) {
      const blog: Blog = {
        id: uuidv4(),
        postedBy: '',
        title: this.blogForm.value.title,
        text: this.blogForm.value.text,
        date: new Date()
      };

      this.activeModal.close(blog);
    }
  }
}
