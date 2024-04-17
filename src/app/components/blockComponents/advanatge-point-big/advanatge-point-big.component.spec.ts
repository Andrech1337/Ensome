import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanatgePointBigComponent } from './advanatge-point-big.component';

describe('AdvanatgePointBigComponent', () => {
  let component: AdvanatgePointBigComponent;
  let fixture: ComponentFixture<AdvanatgePointBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanatgePointBigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanatgePointBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
