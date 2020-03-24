import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePart4Component } from './home-part4.component';

describe('HomePart4Component', () => {
  let component: HomePart4Component;
  let fixture: ComponentFixture<HomePart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
