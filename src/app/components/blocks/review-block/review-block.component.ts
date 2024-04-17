import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ReviewCardComponent } from '@blockComponents/review-card/review-card.component';
import { BlogCardComponent } from '@app/components/blockComponents/blog-card/blog-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-block',
  standalone: true,
  imports: [
    ReviewCardComponent,
    CommonModule,
    BlogCardComponent,
  ],
  templateUrl: './review-block.component.html',
  styleUrl: './review-block.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewBlockComponent {
  @Input() Cards: any;
  @Input() BlockName: string = "BlockName";
  @Input() Name: string = "Name Name";
  @Input() Position: string = "Position Placeholder";
  @Input() Description: string = "Description Placeholder";
  @Input() FaceUrl?: string;
  @Input() Slides: number = 3;
  @Input() Type: string = "text";
  wide: boolean = false;
  ngOnInit() {
    this.wide = this.Slides === 2;
  }


  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('Prev') Prev!: ElementRef;
  @ViewChild('Next') Next!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) { }

  arrowPrevUrl: string = "/assets/img/icon_arrow__left.svg";
  arrowNextUrl: string = "/assets/img/icon_arrow_right.svg";

  ngAfterViewInit() {
    this.swiperContainer.nativeElement.swiper.on('activeIndexChange', () => {
      if (this.swiperContainer.nativeElement.swiper.activeIndex === 0) {
        this.arrowPrevUrl = "/assets/img/icon_arrow__left.svg";
        this.arrowNextUrl = "/assets/img/icon_arrow_right.svg";
        this.cdr.detectChanges();
      } else if (this.swiperContainer.nativeElement.swiper.activeIndex === this.swiperContainer.nativeElement.swiper.slides.length - this.Slides) {
        this.arrowNextUrl = "/assets/img/icon_arrow__left.svg";
        this.arrowPrevUrl = "/assets/img/icon_arrow_right.svg";
        this.cdr.detectChanges();
      } else {
        this.arrowNextUrl = "/assets/img/icon_arrow_right.svg";
        this.arrowPrevUrl = "/assets/img/icon_arrow_right.svg";
        this.cdr.detectChanges();
      }
    });
  }
  clickToPrev() {
    this.swiperContainer.nativeElement.swiper.slidePrev(300);
  }
  clickToNext() {
    this.swiperContainer.nativeElement.swiper.slideNext(300);
  }
}


