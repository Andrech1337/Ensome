import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagePointComponent } from './advantage-point.component';

describe('AdvantagePointComponent', () => {
  let component: AdvantagePointComponent;
  let fixture: ComponentFixture<AdvantagePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvantagePointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvantagePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
