import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogModalComponent } from './add-blog-modal.component';

describe('AddBlogModalComponent', () => {
  let component: AddBlogModalComponent;
  let fixture: ComponentFixture<AddBlogModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBlogModalComponent]
    });
    fixture = TestBed.createComponent(AddBlogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
