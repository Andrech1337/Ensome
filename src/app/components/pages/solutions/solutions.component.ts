import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { TitleBlockComponent } from '@blocks/title-block/title-block.component'
import { ServicesCardComponent } from '@blockComponents/services-card/services-card.component'
import { AdvanatgePointBigComponent } from '@blockComponents/advanatge-point-big/advanatge-point-big.component'
import { ReviewBlockComponent } from '@blocks/review-block/review-block.component'
import { HelpBlockComponent } from '@blocks/help-block/help-block.component'
import { SubscribeBlockComponent } from '@blocks/subscribe-block/subscribe-block.component'
import { testimonialCards } from 'assets/data/testimonials';


@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TitleBlockComponent,
    ServicesCardComponent,
    AdvanatgePointBigComponent,
    ReviewBlockComponent,
    HelpBlockComponent,
    SubscribeBlockComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  cards: any = [];
  ngOnInit() {
    this.cards = testimonialCards;
  }
}
