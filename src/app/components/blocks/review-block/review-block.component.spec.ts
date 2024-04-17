import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBlockComponent } from './review-block.component';

describe('ReviewBlockComponent', () => {
  let component: ReviewBlockComponent;
  let fixture: ComponentFixture<ReviewBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
