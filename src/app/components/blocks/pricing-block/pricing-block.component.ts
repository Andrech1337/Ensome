import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PricingCardComponent } from '@blockComponents/pricing-card/pricing-card.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-block',
  standalone: true,
  imports: [
    MatButtonToggleModule,
    NgClass,
    FormsModule,
    PricingCardComponent,
    CommonModule,
  ],
  templateUrl: './pricing-block.component.html',
  styleUrl: './pricing-block.component.css'
})
export class PricingBlockComponent {
  selectedValue!: string;
  cards = [
    { id: 'trial', name: 'Free trial', priceMo: 'Free', priceYr: 'Free', services: ["For small teams - 5 users", "Community support"], },
    { id: 'lite', name: 'Lite', priceMo: '10$', priceYr: '100$', services: ["For small teams - 15 users", "Individual support", "Individual data - 60GB"], },
    { id: 'basic', name: 'Basic', priceMo: '25$', priceYr: '250$', services: ["For big teams - 30 users", "Individual support", "Individual data - 120GB", "Advanced permissions"] },
    { id: 'custom', name: 'For enterprises', priceMo: 'Custom', priceYr: 'Custom', services: ["Unlimited team members", "Individual support", "Unlimited Individual data", "Advanced permissions", "Data history", "Audit log", "All functions included"] },
  ]
}
