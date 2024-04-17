import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css'
})
export class TeamCardComponent {
  @Input() Name: string = "Biba Boba";
  @Input() Position: string = "Boba Biba";
  staticPart = "linear-gradient(180.00deg, rgba(40, 50, 66, 0) 26.37%, rgb(40, 56, 80) 103.656%)"
  @Input() FaceUrl: string = '/assets/img/team/001_img_person_1.png';
}
