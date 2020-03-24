import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePart8Component } from './home-part8.component';

describe('HomePart8Component', () => {
  let component: HomePart8Component;
  let fixture: ComponentFixture<HomePart8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePart8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePart8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
