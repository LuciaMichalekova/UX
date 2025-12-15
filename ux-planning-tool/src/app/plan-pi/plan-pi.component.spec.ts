import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPiComponent } from './plan-pi.component';

describe('PlanPiComponent', () => {
  let component: PlanPiComponent;
  let fixture: ComponentFixture<PlanPiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanPiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
