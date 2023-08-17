import { Component,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-blog-modal',
  templateUrl: './edit-blog-modal.component.html',
  styleUrls: ['./edit-blog-modal.component.scss']
})
export class EditBlogModalComponent {
  @Input() blog: Blog = { id: '', title: '', text: '', postedBy: '', date: new Date() }; 
  editForm: FormGroup;


  constructor(public activeModal: NgbActiveModal , private blogService: BlogService ) {
    this.editForm = new FormGroup({
      title: new FormControl(this.blog.title, Validators.required),
      text: new FormControl(this.blog.text, Validators.required),
    });
  }
  onSubmit() {
    if (this.editForm.valid) {
      
      const updatedBlog: Blog = {
        id: this.blog.id,
        title: this.editForm.value.title,
        text: this.editForm.value.text,
        postedBy: this.blog.postedBy,
        date: this.blog.date,
      };

    
      this.blogService.editBlog(updatedBlog);

     
      this.activeModal.close('success');
    }
  }

  saveChanges(): void {
    this.activeModal.close('Saved');
  }
}
