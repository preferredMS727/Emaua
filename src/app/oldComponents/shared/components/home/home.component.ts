import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customCaraouselOptions: OwlOptions = {
    items: 4,
    autoplay: false,
    loop: true,
    dotsEach: 4,
    lazyLoad: true,
    lazyLoadEager: 2,
    nav: true,
    navText: ["<i class='fa fa-chevron-circle-left' ></i>", "<i class='fa fa-chevron-circle-right' ></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  };

 

  // models

  mostPopularCousesTitle = "Most Popular Courses";
  mostRecentCoursesTitle = "Recently Added Courses";
  mostRecentLessonsTitle = "Recently Added Lessons";
  mostRecentSubjectsTitle = "Recently Added Subjects";

  constructor(
    private title: Title) {
    this.title.setTitle("Home :: Emaua");
  }

  ngOnInit() {
  }

  getLanguage() { //change this
  }

  loadCourses(language: string) {
  }

  loadSubjects(language: string) {
  }

  loadRecentlyAddedCourses(language: string) {
  }

  loadLessons(language: string) {
  }
 
}