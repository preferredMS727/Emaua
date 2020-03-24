import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPart3Component } from './about-part3.component';

describe('AboutPart3Component', () => {
  let component: AboutPart3Component;
  let fixture: ComponentFixture<AboutPart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
