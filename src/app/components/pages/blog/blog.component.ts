import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BlogCardComponent } from '@app/components/blockComponents/blog-card/blog-card.component';
import { CommonModule } from '@angular/common';
import { blogCards } from 'assets/data/blogCards';
import { SubscribeBlockComponent } from '@app/components/blocks/subscribe-block/subscribe-block.component';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    BlogCardComponent,
    CommonModule,
    SubscribeBlockComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogCards: any = [];
  ngOnInit() {
    this.blogCards = blogCards;
  }
}
