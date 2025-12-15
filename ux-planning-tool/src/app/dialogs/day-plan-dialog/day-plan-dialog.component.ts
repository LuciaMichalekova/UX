import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { DayPlanData, DayPlanResult, Feature } from '../../models';

@Component({
  selector: 'app-day-plan-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDividerModule,
    MatExpansionModule
  ],
  templateUrl: './day-plan-dialog.component.html',
  styleUrl: './day-plan-dialog.component.scss'
})
export class DayPlanDialogComponent {
  features: Feature[] = [
    {
      name: 'Feature 1',
      userStories: ['US 1.1', 'US1.2', 'US1.3', 'US1.4', 'US1.5']
    },
    {
      name: 'Feature 2',
      userStories: ['US 2.1', 'US 2.2', 'US 2.3', 'US 2.4', 'US 2.5']
    },
    {
      name: 'Feature 3',
      userStories: ['US 3.1', 'US 3.2', 'US 3.3', 'US 3.4', 'US 3.5']
    },
    {
      name: 'Feature 4',
      userStories: ['US 4.1', 'US 4.2', 'US 4.3', 'US 4.4', 'US 4.5']
    },
    {
      name: 'Feature 5',
      userStories: ['US 5.1', 'US 5.2', 'US 5.3', 'US 5.4', 'US 5.5']
    },
    {
      name: 'Feature 6',
      userStories: ['US 6.1', 'US 6.2', 'US 6.3', 'US 6.4', 'US 6.5']
    },
    {
      name: 'Feature 7',
      userStories: ['US 7.1', 'US 7.2', 'US 7.3', 'US 7.4', 'US 7.5']
    },
    {
      name: 'Feature 8',
      userStories: ['US 8.1', 'US 8.2', 'US 8.3', 'US 8.4', 'US 8.5']
    },
    {
      name: 'Feature 9',
      userStories: ['US 9.1', 'US 9.2', 'US 9.3', 'US 9.4', 'US 9.5']
    },
    {
      name: 'Feature 10',
      userStories: ['US 10.1', 'US 10.2', 'US 10.3', 'US 10.4', 'US 10.5']
    }
  ];

  selectedUserStory: string = '';
  isFreeDay: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DayPlanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DayPlanData
  ) {
    this.selectedUserStory = data.currentSelection || '';
    this.isFreeDay = data.isFreeDay || false;
  }

  onFreeDayChange(): void {
    if (this.isFreeDay) {
      this.selectedUserStory = '';
    }
  }

  onUserStorySelect(): void {
    if (this.selectedUserStory) {
      this.isFreeDay = false;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const result: DayPlanResult = {
      userStory: this.isFreeDay ? undefined : this.selectedUserStory,
      isFreeDay: this.isFreeDay
    };
    this.dialogRef.close(result);
  }

  onClear(): void {
    this.dialogRef.close({ userStory: undefined, isFreeDay: false });
  }
}
