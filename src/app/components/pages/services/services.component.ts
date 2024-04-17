import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ServicesStatsComponent } from '@blocks/services-stats/services-stats.component';
import { HelpBlockComponent } from '@blocks/help-block/help-block.component';
import { SubscribeBlockComponent } from '@blocks/subscribe-block/subscribe-block.component';
import { ServicesCardComponent } from '@blockComponents/services-card/services-card.component';
import { TitleBlockComponent } from '@blocks/title-block/title-block.component'

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ServicesStatsComponent,
    HelpBlockComponent,
    SubscribeBlockComponent,
    ServicesCardComponent,
    TitleBlockComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
}
