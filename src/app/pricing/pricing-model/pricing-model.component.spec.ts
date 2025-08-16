import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingModelComponent } from './pricing-model.component';

describe('PricingModelComponent', () => {
  let component: PricingModelComponent;
  let fixture: ComponentFixture<PricingModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingModelComponent]
    });
    fixture = TestBed.createComponent(PricingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
