import { Component, Input } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-subjects-caraousel',
  templateUrl: './subjects-caraousel.component.html',
  styleUrls: ['./subjects-caraousel.component.scss']
})
export class SubjectsCaraouselComponent {
  
  @Input() title: string;
  @Input() caraouselOptions: OwlOptions;
  @Input() subjects: any[] = [];
  @Input() matchNumber: number;

}
