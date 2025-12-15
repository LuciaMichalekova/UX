import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreatePiDialogComponent } from '../dialogs/create-pi-dialog/create-pi-dialog.component';
import { PiService } from '../services/pi.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [ MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private piService: PiService
  ) {}

  navigateToViewPIs(): void {
    this.router.navigate(['/view-pis']);
  }

  openCreatePIDialog(): void {
    const dialogRef = this.dialog.open(CreatePiDialogComponent, {
      width: '90%',
      maxWidth: '500px',
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.piService.setCurrentPI(result);
        this.router.navigate(['/plan-pi']);
      }
    });
  }
}
