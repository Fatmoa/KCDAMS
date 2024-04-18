import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialWorkerComponent } from './social-worker.component';

describe('SocialWorkerComponent', () => {
  let component: SocialWorkerComponent;
  let fixture: ComponentFixture<SocialWorkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialWorkerComponent]
    });
    fixture = TestBed.createComponent(SocialWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
