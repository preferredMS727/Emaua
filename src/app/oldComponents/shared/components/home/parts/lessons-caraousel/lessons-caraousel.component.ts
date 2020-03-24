import { Component, Input } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-lessons-caraousel-component',
  templateUrl: './lessons-caraousel.component.html',
  styleUrls: ['./lessons-caraousel.component.scss']
})
export class LessonsCaraouselComponent {

  @Input() title: string;
  @Input() caraouselOptions: OwlOptions;
  @Input() lessons: any[];
  @Input() matchNumber: number;
  
}
