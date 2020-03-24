import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePart6Component } from './home-part6.component';

describe('HomePart6Component', () => {
  let component: HomePart6Component;
  let fixture: ComponentFixture<HomePart6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePart6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePart6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
