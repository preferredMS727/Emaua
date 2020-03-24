import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsCaraouselComponent } from './lessons-caraousel.component';

describe('HomeSubjectsComponent', () => {
  let component: LessonsCaraouselComponent;
  let fixture: ComponentFixture<LessonsCaraouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsCaraouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsCaraouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
