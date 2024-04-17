import { Component, Input } from '@angular/core';
import { AdvantagePointComponent } from '@blockComponents/advantage-point/advantage-point.component'

@Component({
  selector: 'app-advanatge-point-big',
  standalone: true,
  imports: [AdvantagePointComponent],
  templateUrl: './advanatge-point-big.component.html',
  styleUrl: './advanatge-point-big.component.css'
})
export class AdvanatgePointBigComponent {
  @Input() Title: string = "Title";
  @Input() Description: string = "Description";
}
