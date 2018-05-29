/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BbbComponent } from './bbb.component';

describe('BbbComponent', () => {
  let component: BbbComponent;
  let fixture: ComponentFixture<BbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
