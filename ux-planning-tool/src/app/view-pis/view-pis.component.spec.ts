import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPisComponent } from './view-pis.component';

describe('ViewPisComponent', () => {
  let component: ViewPisComponent;
  let fixture: ComponentFixture<ViewPisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
