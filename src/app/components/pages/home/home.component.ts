import { Component } from '@angular/core';
import { ServicesStatsComponent } from '@blocks/services-stats/services-stats.component';
import { HelpBlockComponent } from '@blocks/help-block/help-block.component';
import { SubscribeBlockComponent } from '@blocks/subscribe-block/subscribe-block.component';
import { ReviewBlockComponent } from '@blocks/review-block/review-block.component';
import { PricingBlockComponent } from '@blocks/pricing-block/pricing-block.component'
import { testimonialCards } from 'assets/data/testimonials';
import { blogCards } from 'assets/data/blogCards';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ServicesStatsComponent,
    HelpBlockComponent,
    SubscribeBlockComponent,
    ReviewBlockComponent,
    PricingBlockComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cards: any = [];
  blogCards: any = [];
  ngOnInit() {
    this.cards = testimonialCards;
    this.blogCards = blogCards;
  }
}
