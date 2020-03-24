import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePart9Component } from './home-part9.component';

describe('HomePart9Component', () => {
  let component: HomePart9Component;
  let fixture: ComponentFixture<HomePart9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePart9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePart9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
