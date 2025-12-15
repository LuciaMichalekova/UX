import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PIData } from '../../models';

@Component({
  selector: 'app-create-pi-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './create-pi-dialog.component.html',
  styleUrl: './create-pi-dialog.component.scss'
})
export class CreatePiDialogComponent {
  piData: PIData = {
    piName: '',
    startDate: new Date(),
    numberOfIterations: 6
  };

  constructor(public dialogRef: MatDialogRef<CreatePiDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    if (this.piData.piName && this.piData.startDate && this.piData.numberOfIterations > 0) {
      this.dialogRef.close(this.piData);
    }
  }
}
