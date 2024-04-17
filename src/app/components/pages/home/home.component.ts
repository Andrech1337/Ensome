import { Component } from '@angular/core';
import { ServicesStatsComponent } from '@blocks/services-stats/services-stats.component';
import { HelpBlockComponent } from '@blocks/help-block/help-block.component';
import { SubscribeBlockComponent } from '@blocks/subscribe-block/subscribe-block.component';
import { ReviewBlockComponent } from '@blocks/review-block/review-block.component';
import { PricingBlockComponent } from '@blocks/pricing-block/pricing-block.component'
import { testimonialCards } from 'assets/data/testimonials';

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
  ngOnInit() {
    this.cards = testimonialCards;
  }
  blogCards: any = [
    { title: "ISO 13485 compliance of medical devices", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...", date: "22 June 2022", imgUrl: "/assets/img/blog_img1.png" },
    { title: "Business analysis helps you  in finance", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...", date: "22 June 2022", imgUrl: "/assets/img/blog_img2.png" },
    { title: "5 web portal examples your business can learn from", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...", date: "22 June 2022", imgUrl: "/assets/img/blog_img3.png" },
    { title: "Business analysis helps you  in finance", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...", date: "22 June 2022", imgUrl: "/assets/img/blog_img2.png" },
    { title: "Business analysis helps you  in finance", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...", date: "22 June 2022", imgUrl: "/assets/img/blog_img2.png" },
  ]
}
