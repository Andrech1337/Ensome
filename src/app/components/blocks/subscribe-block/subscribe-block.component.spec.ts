import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeBlockComponent } from './subscribe-block.component';

describe('SubscribeBlockComponent', () => {
  let component: SubscribeBlockComponent;
  let fixture: ComponentFixture<SubscribeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscribeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
