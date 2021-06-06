import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllServicesHomeComponent } from './all-services-home.component';

describe('AllServicesHomeComponent', () => {
  let component: AllServicesHomeComponent;
  let fixture: ComponentFixture<AllServicesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllServicesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllServicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
