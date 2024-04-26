import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleBlockSimpleComponent } from './title-block-simple.component';

describe('TitleBlockSimpleComponent', () => {
  let component: TitleBlockSimpleComponent;
  let fixture: ComponentFixture<TitleBlockSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleBlockSimpleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TitleBlockSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
