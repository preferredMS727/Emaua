import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePart7Component } from './home-part7.component';

describe('HomePart7Component', () => {
  let component: HomePart7Component;
  let fixture: ComponentFixture<HomePart7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePart7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePart7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
