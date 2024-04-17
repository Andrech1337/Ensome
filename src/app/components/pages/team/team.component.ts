import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { TeamCardComponent } from '@blockComponents/team-card/team-card.component'
import { SubscribeBlockComponent } from '@blocks/subscribe-block/subscribe-block.component'

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TeamCardComponent,
    SubscribeBlockComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
