import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePart5Component } from './home-part5.component';

describe('HomePart5Component', () => {
  let component: HomePart5Component;
  let fixture: ComponentFixture<HomePart5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePart5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
