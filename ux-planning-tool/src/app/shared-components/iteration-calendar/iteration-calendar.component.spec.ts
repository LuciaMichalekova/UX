import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationCalendarComponent } from './iteration-calendar.component';

describe('IterationCalendarComponent', () => {
  let component: IterationCalendarComponent;
  let fixture: ComponentFixture<IterationCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IterationCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IterationCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
