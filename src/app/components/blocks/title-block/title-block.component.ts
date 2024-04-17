import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-block',
  standalone: true,
  imports: [],
  templateUrl: './title-block.component.html',
  styleUrl: './title-block.component.css'
})
export class TitleBlockComponent {
  @Input() PageName: string = "PageName";
  @Input() Title: string = "Title";
  @Input() Description: string = "Description";
}
