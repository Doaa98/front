import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsoubFooterComponent } from './hsoub-footer.component';

describe('HsoubFooterComponent', () => {
  let component: HsoubFooterComponent;
  let fixture: ComponentFixture<HsoubFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsoubFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsoubFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
