import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DayPlanDialogComponent } from '../../dialogs/day-plan-dialog/day-plan-dialog.component';
import { DayPlanningService } from '../../services/day-planning.service';
import { Iteration, DayPlanResult } from '../../models';

@Component({
  selector: 'app-iteration-calendar',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './iteration-calendar.component.html',
  styleUrl: './iteration-calendar.component.scss'
})

export class IterationCalendarComponent implements OnInit, OnChanges {
  @Input() iteration!: Iteration;
  
  days: string[] = [];
  teamMembers = ['AB', 'CD', 'EF', 'GH', 'IJ', 'KL', 'MN', 'OP'];

  constructor(
    private dialog: MatDialog,
    private dayPlanningService: DayPlanningService
  ) {}

  ngOnInit(): void {
    if (this.iteration) {
      this.generateWorkingDays();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['iteration'] && this.iteration) {
      this.generateWorkingDays();
    }
  }

  openDayPlanDialog(day: string, member: string): void {
    const currentSelection = this.dayPlanningService.getSelection(
      this.iteration.name, 
      member, 
      day
    );

    const dialogRef = this.dialog.open(DayPlanDialogComponent, {
      width: '90%',
      maxWidth: '600px',
      data: {
        day: day,
        member: member,
        currentSelection: currentSelection?.userStory,
        isFreeDay: currentSelection?.isFreeDay || false
      }
    });

    dialogRef.afterClosed().subscribe((result: DayPlanResult) => {
      if (result !== undefined) {
        if (result.userStory || result.isFreeDay) {
          this.dayPlanningService.setSelection(
            this.iteration.name,
            member,
            day,
            result
          );
        } else {
          this.dayPlanningService.deleteSelection(
            this.iteration.name,
            member,
            day
          );
        }
      }
    });
  }

  getDayContent(day: string, member: string): string {
    const selection = this.dayPlanningService.getSelection(
      this.iteration.name,
      member,
      day
    );
    
    if (selection?.isFreeDay) {
      return 'Free';
    } else if (selection?.userStory) {
      return selection.userStory;
    }
    return '';
  }

  getDayClass(day: string, member: string): string {
    const selection = this.dayPlanningService.getSelection(
      this.iteration.name,
      member,
      day
    );
    
    if (selection?.isFreeDay) {
      return 'free-day';
    } else if (selection?.userStory) {
      return 'has-feature';
    }
    return '';
  }

  isUnplanned(day: string, member: string): boolean {
    const selection = this.dayPlanningService.getSelection(
      this.iteration.name,
      member,
      day
    );
    return !selection;
  }

  private generateWorkingDays(): void {
    const days: string[] = [];
    let currentDate = new Date(this.iteration.startDate);
    const endDate = new Date(this.iteration.endDate);

    while (currentDate <= endDate) {
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        days.push(this.formatDate(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    this.days = days;
  }

  private formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
}
