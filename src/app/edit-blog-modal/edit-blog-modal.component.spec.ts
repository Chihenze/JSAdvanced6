import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogModalComponent } from './edit-blog-modal.component';

describe('EditBlogModalComponent', () => {
  let component: EditBlogModalComponent;
  let fixture: ComponentFixture<EditBlogModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBlogModalComponent]
    });
    fixture = TestBed.createComponent(EditBlogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
