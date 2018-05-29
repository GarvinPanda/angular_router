/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CccComponent } from './ccc.component';

describe('CccComponent', () => {
  let component: CccComponent;
  let fixture: ComponentFixture<CccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
