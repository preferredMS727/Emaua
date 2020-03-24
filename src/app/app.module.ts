import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomePart1Component } from './home-part1/home-part1.component';
import { HomePart2Component } from './home-part2/home-part2.component';
import { HomePart3Component } from './home-part3/home-part3.component';
import { HomePart4Component } from './home-part4/home-part4.component';
import { HomePart5Component } from './home-part5/home-part5.component';
import { HomePart6Component } from './home-part6/home-part6.component';
import { HomePart7Component } from './home-part7/home-part7.component';
import { HomePart8Component } from './home-part8/home-part8.component';
import { HomePart9Component } from './home-part9/home-part9.component';
import { HomePart10Component } from './home-part10/home-part10.component';
import { CourseHomeComponent } from './course-home/course-home.component';
import { AboutComponent } from './about/about.component';
import { AboutPart1Component } from './about-part1/about-part1.component';
import { AboutPart2Component } from './about-part2/about-part2.component';
import { AboutPart3Component } from './about-part3/about-part3.component';
import { AboutPart4Component } from './about-part4/about-part4.component';
import { AboutPart5Component } from './about-part5/about-part5.component';
import { HomeMainComponent } from './home-main/home-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomePart1Component,
    HomePart2Component,
    HomePart3Component,
    HomePart4Component,
    HomePart5Component,
    HomePart6Component,
    HomePart7Component,
    HomePart8Component,
    HomePart9Component,
    HomePart10Component,
    CourseHomeComponent,
    AboutComponent,
    AboutPart1Component,
    AboutPart2Component,
    AboutPart3Component,
    AboutPart4Component,
    AboutPart5Component,
    HomeMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
