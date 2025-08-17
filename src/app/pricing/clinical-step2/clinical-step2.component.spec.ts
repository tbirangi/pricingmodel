import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalStep2Component } from './clinical-step2.component';

describe('ClinicalStep2Component', () => {
  let component: ClinicalStep2Component;
  let fixture: ComponentFixture<ClinicalStep2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicalStep2Component]
    });
    fixture = TestBed.createComponent(ClinicalStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
