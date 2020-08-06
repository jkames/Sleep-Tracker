import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleeptrackerPage } from './sleeptracker.page';

describe('SleeptrackerPage', () => {
  let component: SleeptrackerPage;
  let fixture: ComponentFixture<SleeptrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleeptrackerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleeptrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
