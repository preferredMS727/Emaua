import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPart2Component } from './about-part2.component';

describe('AboutPart2Component', () => {
  let component: AboutPart2Component;
  let fixture: ComponentFixture<AboutPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
