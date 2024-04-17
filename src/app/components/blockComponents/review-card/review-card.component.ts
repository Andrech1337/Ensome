import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css'
})
export class ReviewCardComponent {
  @Input({ required: true }) Name?: string;
  @Input({ required: true }) Position?: string;
  @Input({ required: true }) Description?: string;
  @Input({ required: true }) FaceUrl?: string;
  @Input() wide?: boolean;
}
