import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsCaraouselComponent } from './subjects-caraousel.component';

describe('HomeCoursesComponent', () => {
  let component: SubjectsCaraouselComponent;
  let fixture: ComponentFixture<SubjectsCaraouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsCaraouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsCaraouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
