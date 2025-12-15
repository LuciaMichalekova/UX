import { Injectable } from '@angular/core';
import { DaySelection } from '../models';
import { MANDAY, Manday } from '../shared/manday';

@Injectable({
  providedIn: 'root'
})
export class DayPlanningService {

  setSelection(iterationName: string, member: string, day: string, selection: DaySelection): void {
    const existingIndex = MANDAY.findIndex(
      m => m.iterationName === iterationName && m.member === member && m.day === day
    );
    
    if (existingIndex !== -1) {
      MANDAY.splice(existingIndex, 1);
    }

    const manday: Manday = {
      member,
      day,
      iterationName,
      userStory: selection.userStory,
      isFreeDay: selection.isFreeDay
    };
    MANDAY.push(manday);
  }

  getSelection(iterationName: string, member: string, day: string): DaySelection | undefined {
    const manday = MANDAY.find(
      m => m.iterationName === iterationName && m.member === member && m.day === day
    );
    
    if (!manday) {
      return undefined;
    }

    return {
      userStory: manday.userStory,
      isFreeDay: manday.isFreeDay
    };
  }

  deleteSelection(iterationName: string, member: string, day: string): void {
    const index = MANDAY.findIndex(
      m => m.iterationName === iterationName && m.member === member && m.day === day
    );
    
    if (index !== -1) {
      MANDAY.splice(index, 1);
    }
  }

  clearAllSelections(): void {
    MANDAY.length = 0;
  }

  getAllSelections(): Manday[] {
    return MANDAY;
  }
}
