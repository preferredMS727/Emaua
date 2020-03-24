import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  busy: boolean = true;

  slides: any[] = [{
    id: 0,
    image: 'assets/img/education-cloud-640x480.jpeg',
  }, {
    id: 1,
    image: 'assets/img/pimgpsh_fullsize_distr.png',
  }, {
    id: 2,
    image: 'assets/img/knowledge-management-strategy-640x480.jpeg',
  }];

  customOptions: OwlOptions = {
    items: 1,
    autoplay: true,
    autoplayTimeout: 2600,
    loop: true,
    lazyLoad: true,
    navText: ["<i class='fa fa-chevron-left float-left'></i>", "<i class='fa fa-chevron-right float-right'></i>"],
    nav: true,
    autoplaySpeed: 2000,
    autoHeight: false,
  };

  constructor() { }

  ngOnInit() { }

}
