import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css'
})
export class PricingCardComponent {
  @Input() selectedValue!: string;
  @Input() name?: string = 'Name';
  @Input() value!: string;
  @Input() services!: Array<string>;
}
