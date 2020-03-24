import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCaraouselComponent } from './courses-caraousel.component';

describe('PopularCoursesComponent', () => {
  let component: CoursesCaraouselComponent;
  let fixture: ComponentFixture<CoursesCaraouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCaraouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCaraouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
