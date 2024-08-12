import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piechart3Component } from './piechart3.component';

describe('Piechart3Component', () => {
  let component: Piechart3Component;
  let fixture: ComponentFixture<Piechart3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Piechart3Component]
    });
    fixture = TestBed.createComponent(Piechart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
