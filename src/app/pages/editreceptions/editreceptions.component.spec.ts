import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreceptionsComponent } from './editreceptions.component';

describe('EditreceptionsComponent', () => {
  let component: EditreceptionsComponent;
  let fixture: ComponentFixture<EditreceptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditreceptionsComponent]
    });
    fixture = TestBed.createComponent(EditreceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
