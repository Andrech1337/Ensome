import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { TitleBlockComponent } from '@app/components/blocks/title-block/title-block.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HelpBlockComponent } from '@app/components/blocks/help-block/help-block.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    MatExpansionModule,
    TitleBlockComponent,
    RouterLink, RouterLinkActive,
    HelpBlockComponent,
    CommonModule,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  panelOpenState1 = false;
  questions: any = [
    { opened: false, title: 'What are data analytics?', description: 'rabotaet tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ' },
    { opened: false, title: 'What is data mining?', description: 'tochno rabotaet tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ' },
    { opened: false, title: 'What is business intelligence?', description: 'Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ' },
    { opened: false, title: 'What is exploratory data analysis (EDA)?', description: 'Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ' },
    { opened: false, title: 'What is confirmatory data analysis (CDA)?', description: 'Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ' },
    { opened: false, title: 'What are predictive analytics?', description: 'Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ' },
    { opened: false, title: 'What is data visualisation?', description: 'Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. ' },
  ]
}
