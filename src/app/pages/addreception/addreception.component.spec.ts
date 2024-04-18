import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreceptionComponent } from './addreception.component';

describe('AddreceptionComponent', () => {
  let component: AddreceptionComponent;
  let fixture: ComponentFixture<AddreceptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddreceptionComponent]
    });
    fixture = TestBed.createComponent(AddreceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
