import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo1Component } from './compo1.component';

describe('Compo1Component', () => {
  let component: Compo1Component;
  let fixture: ComponentFixture<Compo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Compo1Component]
    });
    fixture = TestBed.createComponent(Compo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
