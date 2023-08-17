import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  selectedId = '1';
  public blogs: Blog[] = [
    {
      id: '1',
      title: 'First Post',
      text: 'Sign Up to create your account and start to use Angular',
      postedBy: 'admin',
      date: new Date(),
    },
  ];
  private blogsSubject = new BehaviorSubject<Blog[]>(this.blogs);

  constructor() { }

  getPermanentBlog(): Blog | undefined {
    return this.blogs.find(blog => blog.id === '1');
  }


  getBlogs(): Observable<Blog[]> {

    return of(this.blogs);
  }


  addBlog(blog: Blog): Observable<any> {
    this.blogs.push(blog);
    this.blogsSubject.next(this.blogs.slice());
    return this.blogsSubject.asObservable();
  }


  deleteBlog(blogId: string): void {
    this.blogs = this.blogs.filter((blog) => blog.id !== blogId);
  }

  editBlog(updatedBlog: Blog): void {
    const index = this.blogs.findIndex((blog) => blog.id === updatedBlog.id);
    if (index !== -1) {
      this.blogs[index] = updatedBlog;
    }
  }
}
