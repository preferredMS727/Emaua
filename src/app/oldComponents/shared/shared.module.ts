import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplexPasswordDirective } from './directives/complex.password.directive';
import { MatchPasswordDirective } from './directives/match.password.directive';
import { NoImageDirective } from './directives/no.image.directive';
import { RequiredTrueDirective } from './directives/required.true.directive';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ClipboardModule } from 'ngx-clipboard';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/home/parts/carousel/carousel.component';
import { HomeInfoComponent } from './components/home/parts/home-info/home-info.component';
import { CoursesCaraouselComponent } from './components/home/parts/courses-caraousel/courses-caraousel.component';
import { LessonsCaraouselComponent } from './components/home/parts/lessons-caraousel/lessons-caraousel.component';

import { TagInputModule } from 'ngx-chips';
import { SearchTypesComponent } from './components/search-types/search-types.component';
// import { NgScrollbarModule } from 'ngx-scrollbar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SubjectsCaraouselComponent } from './components/home/parts/subjects-caraousel/subjects-caraousel.component';

@NgModule({
  declarations: [
    ComplexPasswordDirective,
    MatchPasswordDirective,
    NoImageDirective,
    RequiredTrueDirective,
    DeleteConfirmationComponent,
    SpinnerComponent,
    BreadcrumbsComponent,
    SearchComponent,
    HomeComponent,
    CarouselComponent,
    HomeInfoComponent,
    CoursesCaraouselComponent,
    LessonsCaraouselComponent,
    SubjectsCaraouselComponent,
    SearchTypesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    ClipboardModule,
    RouterModule,
    CarouselModule
    // NgScrollbarModule
  ],
  exports: [
    ComplexPasswordDirective,
    MatchPasswordDirective,
    NoImageDirective,
    RequiredTrueDirective,
    TagInputModule,
    DeleteConfirmationComponent,
    FormsModule,
    ReactiveFormsModule,
    SpinnerComponent,
    ClipboardModule,
    BreadcrumbsComponent,
    RouterModule,
    SearchComponent,
    NgbModule,
    // NgScrollbarModule,
    HomeComponent,
    CarouselComponent,
    HomeInfoComponent,
    CoursesCaraouselComponent,
    LessonsCaraouselComponent,
    SubjectsCaraouselComponent,
    SearchTypesComponent,
    CarouselModule
  ],
  providers: [
  ]
})
export class SharedModule { }
