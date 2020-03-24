import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePart10Component } from './home-part10.component';

describe('HomePart10Component', () => {
  let component: HomePart10Component;
  let fixture: ComponentFixture<HomePart10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePart10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePart10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
