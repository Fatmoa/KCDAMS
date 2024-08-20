import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCounselComponent } from './view-counsel.component';

describe('ViewCounselComponent', () => {
  let component: ViewCounselComponent;
  let fixture: ComponentFixture<ViewCounselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCounselComponent]
    });
    fixture = TestBed.createComponent(ViewCounselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
