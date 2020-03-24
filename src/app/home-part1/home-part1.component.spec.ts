import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePart1Component } from './home-part1.component';

describe('HomePart1Component', () => {
  let component: HomePart1Component;
  let fixture: ComponentFixture<HomePart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
