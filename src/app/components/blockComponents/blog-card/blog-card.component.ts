import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  @Input() title: string = 'Blog Title';
  @Input() description: string = 'Description';
  @Input() date: string = '22 June 2022';
  @Input() imgUrl: string = '/assets/img/blog_img1.png';
}
