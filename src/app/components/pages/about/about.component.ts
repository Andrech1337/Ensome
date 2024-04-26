import { Component } from '@angular/core';
import { TitleBlockSimpleComponent } from '@blocks/title-block-simple/title-block-simple.component'
import { ServicesStatsComponent } from '@app/components/blocks/services-stats/services-stats.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TitleBlockSimpleComponent,
    ServicesStatsComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
