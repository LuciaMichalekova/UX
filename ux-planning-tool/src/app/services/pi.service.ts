import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PIData, Iteration } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PiService {
  private currentPISubject = new BehaviorSubject<PIData | null>(null);
  currentPI$ = this.currentPISubject.asObservable();

  setCurrentPI(piData: PIData): void {
    this.currentPISubject.next(piData);
  }

  getCurrentPI(): PIData | null {
    return this.currentPISubject.value;
  }

  calculateIterations(startDate: Date, numberOfIterations: number): Iteration[] {
    const iterations: Iteration[] = [];
    let currentDate = new Date(startDate);

    for (let i = 0; i < numberOfIterations; i++) {
      const iterationStart = new Date(currentDate);
      const iterationEnd = this.addWorkingDays(currentDate, 9); // 10 working days (0-9)
      
      iterations.push({
        name: `IT${String(i + 1).padStart(2, '0')}`,
        startDate: iterationStart,
        endDate: iterationEnd
      });

      // Move to the next iteration (add 1 day after the end)
      currentDate = this.addWorkingDays(iterationEnd, 1);
    }

    return iterations;
  }

  private addWorkingDays(date: Date, days: number): Date {
    let result = new Date(date);
    let addedDays = 0;

    while (addedDays < days) {
      result.setDate(result.getDate() + 1);
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (result.getDay() !== 0 && result.getDay() !== 6) {
        addedDays++;
      }
    }

    return result;
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
}
