import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piechart4Component } from './piechart4.component';

describe('Piechart4Component', () => {
  let component: Piechart4Component;
  let fixture: ComponentFixture<Piechart4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Piechart4Component]
    });
    fixture = TestBed.createComponent(Piechart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
