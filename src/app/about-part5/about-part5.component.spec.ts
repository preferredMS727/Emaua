import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPart5Component } from './about-part5.component';

describe('AboutPart5Component', () => {
  let component: AboutPart5Component;
  let fixture: ComponentFixture<AboutPart5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPart5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
