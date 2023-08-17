import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogModalComponent } from '../blog-modal/blog-modal.component';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [
  ];

  constructor(private modalService: NgbModal, private blogService: BlogService) {}

  ngOnInit() {
    this.loadBlogs();
  }

 
  loadBlogs() {
    
    this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
      this.blogs = blogs;
    });
  }
  

  openBlogModal() {
    const modalRef = this.modalService.open(BlogModalComponent);
    modalRef.result.then(
      (result) => {
        if (result) {
          
          this.blogService.addBlog(result);
          this.loadBlogs();
        }
      },
      (reason) => {
        
      }
    );
  }
}
