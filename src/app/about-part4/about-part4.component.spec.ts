import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPart4Component } from './about-part4.component';

describe('AboutPart4Component', () => {
  let component: AboutPart4Component;
  let fixture: ComponentFixture<AboutPart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
