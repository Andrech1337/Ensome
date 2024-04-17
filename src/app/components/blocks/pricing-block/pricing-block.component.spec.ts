import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingBlockComponent } from './pricing-block.component';

describe('PricingBlockComponent', () => {
  let component: PricingBlockComponent;
  let fixture: ComponentFixture<PricingBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
