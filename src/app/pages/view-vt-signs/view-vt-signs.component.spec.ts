import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVtSignsComponent } from './view-vt-signs.component';

describe('ViewVtSignsComponent', () => {
  let component: ViewVtSignsComponent;
  let fixture: ComponentFixture<ViewVtSignsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVtSignsComponent]
    });
    fixture = TestBed.createComponent(ViewVtSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
