import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advantage-point',
  standalone: true,
  imports: [],
  templateUrl: './advantage-point.component.html',
  styleUrl: './advantage-point.component.css'
})
export class AdvantagePointComponent {
  @Input() Text: string = "Sample text";
}
