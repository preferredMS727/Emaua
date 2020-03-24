import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-courses-caraousel-component',
  templateUrl: './courses-caraousel.component.html',
  styleUrls: ['./courses-caraousel.component.scss']
})

export class CoursesCaraouselComponent {

  @Input() title: string;
  @Input() caraouselOptions: OwlOptions;
  @Input() courses: any[] = [];
  @Input() matchNumber: number;

}