import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IterationCalendarComponent } from "../shared-components/iteration-calendar/iteration-calendar.component";
import { PiService } from '../services/pi.service';
import { Router } from '@angular/router';
import { Iteration } from '../models';

@Component({
  selector: 'app-plan-pi',
  imports: [
    CommonModule, 
    IterationCalendarComponent
  ],
  templateUrl: './plan-pi.component.html',
  styleUrl: './plan-pi.component.scss'
})

export class PlanPiComponent implements OnInit {
  piName: string = '';
  iterations: Iteration[] = [];
  selectedIteration: Iteration | null = null;

  constructor(
    private piService: PiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentPI = this.piService.getCurrentPI();
    
    if (currentPI) {
      this.piName = currentPI.piName;
      this.iterations = this.piService.calculateIterations(
        currentPI.startDate,
        currentPI.numberOfIterations
      );
      // Select first iteration by default
      if (this.iterations.length > 0) {
        this.selectedIteration = this.iterations[0];
      }
    } else {
      // If no PI data, redirect to home
      this.router.navigate(['/']);
    }
  }

  selectIteration(iteration: Iteration): void {
    this.selectedIteration = iteration;
  }

  isSelected(iteration: Iteration): boolean {
    return this.selectedIteration === iteration;
  }

  formatDateRange(iteration: Iteration): string {
    const start = this.piService.formatDate(iteration.startDate);
    const end = this.piService.formatDate(iteration.endDate);
    return `${start} - ${end}`;
  }
}
