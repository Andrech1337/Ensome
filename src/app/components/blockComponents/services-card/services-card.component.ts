import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.css'
})
export class ServicesCardComponent {
  @Input() Title: string = "CardTitle";
  @Input() Description: string = "CardDescription";
  @Input() ImgUrl?: string;
}


