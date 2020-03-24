import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePart3Component } from './home-part3.component';

describe('HomePart3Component', () => {
  let component: HomePart3Component;
  let fixture: ComponentFixture<HomePart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
