import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanfordsleepinessPage } from './stanfordsleepiness.page';

describe('StanfordsleepinessPage', () => {
  let component: StanfordsleepinessPage;
  let fixture: ComponentFixture<StanfordsleepinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanfordsleepinessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanfordsleepinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
