import { Component, Input } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [
    MatButtonToggleModule,
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
  @Input() priceMo: string = 'monthly Price';
  @Input() priceYr: string = 'yearly Price';
  selectedPlan!: string;
  @Input() price?: string;
  ngOnInit() {
    this.price = this.priceMo;

  }
  update() {
    if (this.selectedPlan == this.value + 'Mo') {
      this.price = this.priceMo;
    }
    if (this.selectedPlan == this.value + 'Yr') {
      this.price = this.priceYr;
    }
  }

}
