import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-title-block-simple',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive,
  ],
  templateUrl: './title-block-simple.component.html',
  styleUrl: './title-block-simple.component.css'
})
export class TitleBlockSimpleComponent {
  @Input() router?: string;
  @Input() routerTitle?: string = "routerTitle";
  @Input() title?: string = "title";
}
